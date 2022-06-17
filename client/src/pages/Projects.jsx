import { useQuery } from '@apollo/client';

import Spinner from '../components/Spinner';
import ProjectCard from '../components/ProjectCard';

import { GET_PROJECTS } from '../queries/projectQueries';

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading)
    return <Spinner />;
  if (error)
    return <p>Something went wrong</p>;
  return (
    <div className='grid  grid-cols-3 gap-4'>
      {
        data.projects.map(project => (
          <ProjectCard project={project} key={project.id} />
        ))
      }
    </div>
  )
}
