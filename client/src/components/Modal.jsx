import { Modal as FlowbiteModal, Button } from 'flowbite-react';

export default function Modal(props) {
  return (
    <FlowbiteModal show={props.show} onClose={props.onClose}>
      <FlowbiteModal.Header>
        {props.header}
      </FlowbiteModal.Header>
      <FlowbiteModal.Body>
        {props.children}
      </FlowbiteModal.Body>
      <FlowbiteModal.Footer>
        <Button
          color="gray"
          onClick={props.onClose}
        >
          Cancel
        </Button>
        <Button onClick={props.onSubmit}>
          Submit
        </Button>
      </FlowbiteModal.Footer>
    </FlowbiteModal>
  )
}
