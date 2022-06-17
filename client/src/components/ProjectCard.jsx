import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  const statusClass = project.status.toLowerCase().split(" ").join('_');
  return (
    <Card>
      <div className='flex items-baseline'>
        <h5 className="text-2xl mr-4 font-bold tracking-tight text-gray-900 dark:text-white">
          {project.name}
        </h5>
        <p className={`${statusClass} rounded-2xl py-1 px-2 text-xs font-semibold`}>
          {project.status}
        </p>
      </div>
      <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
        {project.description}
      </p>
      <Link to={`/projects/${project.id}`}>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
        >
          Details
        </button>
      </Link>
    </Card>
  )
}
