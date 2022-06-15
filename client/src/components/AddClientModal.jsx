import { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useMutation } from '@apollo/client';

import Modal from "./Modal";
import { ADD_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { Button, Label, TextInput } from 'flowbite-react';

export default function AddClientModal() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: {
      name,
      email,
      phone
    },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });

      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: clients.concat([addClient]) }
      })
    }
  });

  function resetModal() {
    setShowModal(false);
    setName('');
    setEmail('');
    setPhone('');
  }

  function onSubmit(e) {
    e.preventDefault();

    if (name === '' || email === '' || phone === '') {
      return alert('Please fill in all fields');
    }

    addClient(name, email, phone);
    resetModal();

  }

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        <FaUser className='icon' />
        <div>Add Client</div>
      </Button>
      <Modal
        show={showModal}
        header='Add Client'
        onClose={resetModal}
        onSubmit={onSubmit}
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
              placeholder="Test"
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                value="E-mail:"
                htmlFor="email"
              />
            </div>
            <TextInput
              id="email"
              type="email"
              value={email}
              required={true}
              placeholder="test@email.com"
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                value="Phone:"
                htmlFor="phone"
              />
            </div>
            <TextInput
              id="phone"
              value={phone}
              required={true}
              placeholder="231-345-5663"
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </form>
      </Modal>
    </>
  )
}
