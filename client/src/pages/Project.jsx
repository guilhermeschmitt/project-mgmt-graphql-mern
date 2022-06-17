import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { GET_PROJECT } from '../queries/projectQueries';

import Spinner from '../components/Spinner';
import EditProjectModal from '../components/EditProjectModal';
import DeleteProjectButton from '../components/DeleteProjectButton';

export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id }
  });

  if (loading)
    return <Spinner />;
  if (error)
    return <p>Something Went Wrong</p>;

  const { project } = data;
  const statusClass = project.status.toLowerCase().split(" ").join('_');

  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex items-baseline'>
          <h5 className="text-2xl mr-4 font-bold tracking-tight text-gray-900 dark:text-white">
            {project.name}
          </h5>
          <p className={`${statusClass} rounded-2xl py-1 px-2 text-xs font-semibold`}>
            {project.status}
          </p>
        </div>
        <div className='flex items-center'>
          <div className='mr-3'>
            <EditProjectModal project={project} />
          </div>
          <DeleteProjectButton projectId={id} />
        </div>
      </div>

      <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
        {project.description}
      </p>
      <h4 className="text-xl mr-4 font-bold tracking-tight text-gray-900 dark:text-white">
        Client
      </h4>
      <hr className='my-3' />
      <div>
        <strong>Name: </strong>{project.client.name}
      </div>
      <div>
        <strong>E-mail: </strong>{project.client.email}
      </div>
      <div>
        <strong>Phone: </strong>{project.client.phone}
      </div>
    </div>
  )
}
