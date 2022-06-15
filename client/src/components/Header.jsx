import logo from './assets/logo.png';
import { Navbar } from 'flowbite-react';
import AddClientModal from './AddClientModal';

export default function Header() {
  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
      >
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
        <div className="flex md:order-2">
          <AddClientModal />
          <Navbar.Toggle />
        </div>
      </Navbar>
      <hr className=" w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto" />
    </>
  )
}
