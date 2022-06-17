import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="text-center">
      <FaExclamationTriangle size='5em' />
      <h1>
        404
      </h1>
      <p>
        Sorry, this page does not exist
      </p>
      <Link to='/'>
        Go Back
      </Link>
    </div>
  )
}
