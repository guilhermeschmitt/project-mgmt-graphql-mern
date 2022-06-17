import { FaTrash } from 'react-icons/fa';
import { Button } from "flowbite-react";
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

import { GET_PROJECTS } from '../queries/projectQueries';
import { DELETE_PROJECT } from '../mutations/projectMutations';

export default function DeleteProjectButton({ projectId }) {

  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate('/projects'),
    refetchQueries: [{ query: GET_PROJECTS }]
  })

  return (
    <Button color="failure" onClick={deleteProject}>
      <FaTrash className='icon mr-2' />
      <p>Delete</p>
    </Button>
  )
}
