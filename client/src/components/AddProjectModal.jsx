import { useState } from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { useMutation, useQuery } from '@apollo/client';
import { Button, Label, Select, Textarea, TextInput } from 'flowbite-react';

import Modal from "./Modal";

import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';

import { ADD_PROJECT } from '../mutations/projectMutations';

export default function AddProjectModal() {

  const [name, setName] = useState('');
  const [status, setStatus] = useState('new');
  const [clientId, setClientId] = useState('');
  const [description, setDescription] = useState('');

  const [showModal, setShowModal] = useState(false);

  const { loading, error, data } = useQuery(GET_CLIENTS);

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: {
      name,
      status,
      clientId,
      description
    },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });

      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: projects.concat([addProject]) }
      })
    }
  });

  function resetModal() {
    setShowModal(false);
    setName('');
    setDescription('');
    setStatus('new');
    setClientId('');
  }

  function onSubmit(e) {
    e.preventDefault();

    if (name === '' || description === '' || status === '' || clientId === '') {
      return alert('Please fill in all fields');
    }

    addProject(name, status, clientId, description);
    resetModal();
  }

  if (loading)
    return;
  if (error)
    return (
      <Button disabled>
        <FaBriefcase className='icon mr-2' />
        <p>Add Project</p>
      </Button>
    );
  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <FaBriefcase className='icon mr-2' />
        <p>Add Project</p>
      </Button>
      <Modal
        show={showModal}
        onSubmit={onSubmit}
        header='Add Project'
        onClose={resetModal}
      >
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                value="Name:"
                htmlFor="name"
              />
            </div>
            <TextInput
              id="name"
              value={name}
              required={true}
              placeholder="Project name"
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                value="Description:"
                htmlFor="description"
              />
            </div>
            <Textarea
              id="description"
              required={true}
              value={description}
              placeholder="Something something something..."
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                value="Status:"
                htmlFor="status"
              />
            </div>
            <Select
              id="status"
              value={status}
              required={true}
              onChange={e => setStatus(e.target.value)}
            >
              <option value='new'>
                Not Started
              </option>
              <option value='progress'>
                In Progress
              </option>
              <option value='completed'>
                Completed
              </option>
            </Select>
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                value="Client:"
                htmlFor="clientId"
              />
            </div>
            <Select
              id="clientId"
              required={true}
              value={clientId}
              onChange={e => setClientId(e.target.value)}
            >
              <option value=''>
                Select Client
              </option>
              {
                data.clients.map(client => (
                  <option value={client.id} key={client.id}>
                    {client.name}
                  </option>
                ))
              }
            </Select>
          </div>

        </form>
      </Modal>
    </>
  )
}
