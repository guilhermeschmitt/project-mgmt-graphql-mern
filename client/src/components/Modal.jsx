import { Modal as FlowBiteModal, Button } from 'flowbite-react';

export default function Modal(props) {
  return (
    <FlowBiteModal show={props.show}>
      <FlowBiteModal.Header>
        {props.header}
      </FlowBiteModal.Header>
      <FlowBiteModal.Body>

          {props.children}

      </FlowBiteModal.Body>
      <FlowBiteModal.Footer>
        <Button
          color="gray"
          onClick={props.onClose}
        >
          Cancel
        </Button>
        <Button onClick={props.onSubmit}>
          Submit
        </Button>
      </FlowBiteModal.Footer>
    </FlowBiteModal>
  )
}
