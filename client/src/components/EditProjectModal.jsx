import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { Button, Label, Select, Textarea, TextInput } from "flowbite-react";

import { GET_PROJECT } from "../queries/projectQueries";

import { UPDATE_PROJECT } from "../mutations/projectMutations";

import Modal from "./Modal";

export default function EditProjectModal({ project }) {

  const [status, setStatus] = useState('');
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);

  const [showModal, setShowModal] = useState(false);

  const [updateProject] = useMutation(UPDATE_PROJECT, {
    variables: {
      id: project.id,
      name,
      status,
      description
    },
    refetchQueries: [{query: GET_PROJECT}]
  });

  function resetModal() {
    setShowModal(false);
    setName('');
    setDescription('');
    setStatus('new');
  }

  function onSubmit(e) {
    e.preventDefault();

    if (name === '' || description === '' || status === '') {
      return alert('Please fill in all fields');
    }

    updateProject(name, status, description);
    resetModal();
  }


  return (
    <>
      <Button onClick={() => setShowModal(true)} color='gray'>
        <FaPen className='icon mr-2' />
        <p>Edit Project</p>
      </Button>
      <Modal
        show={showModal}
        onSubmit={onSubmit}
        onClose={resetModal}
        header='Edit Project'
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
        </form>
      </Modal>
    </>
  )
}
