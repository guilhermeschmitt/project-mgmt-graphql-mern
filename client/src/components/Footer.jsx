import { Footer as FlowbiteFooter } from 'flowbite-react';

export default function Footer() {
  return (
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
  )
}
