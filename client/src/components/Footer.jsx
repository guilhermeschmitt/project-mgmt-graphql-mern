import { Footer as FlowbiteFooter } from 'flowbite-react';

export default function Footer() {
  return (
    <>
      <hr className=" w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto" />
      <FlowbiteFooter className="flex flex-col">
        <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
          Inspired by
          <a
            target="_blank"
            rel="noopener noreferrer"
            className='ml-1 hover:underline'
            href='https://www.youtube.com/watch?v=BcLNfwF04Kw'
          >
            Traversy Media &copy;
          </a>
          2022.
        </span>
      </FlowbiteFooter>
    </>
  )
}
