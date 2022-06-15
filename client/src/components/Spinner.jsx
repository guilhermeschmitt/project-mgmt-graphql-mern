import { Spinner as FlowbiteSpinner } from 'flowbite-react';

export default function Spinner() {
  return (
    <div className="text-center">
      <FlowbiteSpinner
        size="xl"
        aria-label="Loading"
      />
    </div>
  )
}
