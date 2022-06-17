import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

import logo from './assets/logo.png';

import AddClientModal from './AddClientModal';
import AddProjectModal from './AddProjectModal';

export default function Header() {
  return (
    <>
      <Navbar fluid={true}>
        <Link to='/'>
          <Navbar.Brand>
            <img
              src={logo}
              alt="Graphql logo"
              className="mr-3 h-6 sm:h-9"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Project Management
            </span>
          </Navbar.Brand>
        </Link>
        <div className="flex md:order-2">
          <div className='mr-3'>
            <AddClientModal />
          </div>
          <AddProjectModal />
        </div>
        <Navbar.Collapse>
          <Link to="/projects">
            <Navbar.Link >
              Projects
            </Navbar.Link>
          </Link>
          <Link to="/about">
            <Navbar.Link >
              About
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
      <hr className=" w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto" />
    </>
  )
}
