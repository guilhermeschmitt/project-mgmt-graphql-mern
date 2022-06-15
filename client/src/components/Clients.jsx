import { Table } from 'flowbite-react';
import { useQuery } from '@apollo/client';

import { GET_CLIENTS } from '../queries/clientQueries';

import Spinner from './Spinner';
import ClientRow from './ClientRow';

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading)
    return <Spinner />;
  if (error)
    return <p>Error!</p>;
  return (
    <Table>
      <Table.Head>
        <Table.Cell>
          Name
        </Table.Cell>
        <Table.Cell>
          E-mail
        </Table.Cell>
        <Table.Cell>
          Phone
        </Table.Cell>
        <Table.Cell>
        </Table.Cell>
      </Table.Head>

      <Table.Body className="divide-y">
        {
          data.clients.map(client => (
            <ClientRow key={client.id} client={client} />
          ))
        }
      </Table.Body>

    </Table>
  )
}
