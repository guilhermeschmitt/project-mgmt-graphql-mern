import { Table } from 'flowbite-react';
import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';

import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';

import { DELETE_CLIENT } from '../mutations/clientMutations';

export default function ClientRow({ client }) {

  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: {
      id: client.id
    },
    refetchQueries: [
      { query: GET_CLIENTS },
      { query: GET_PROJECTS }
    ]
    //AGORA QUE TO DELETANDO OS PROJETOS ASSOCIADOS AO CLIENTE, É MAIS RÁPIDO FAZER UM REFETCH
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS })
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter(client => client.id !== deleteClient.id)
    //     }
    //   })
    // }
  })

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {client.name}
      </Table.Cell>
      <Table.Cell>
        {client.email}
      </Table.Cell>
      <Table.Cell>
        {client.phone}
      </Table.Cell>
      <Table.Cell>
        <button onClick={deleteClient}>
          <FaTrash />
        </button>
      </Table.Cell>
    </Table.Row>
  )
}
