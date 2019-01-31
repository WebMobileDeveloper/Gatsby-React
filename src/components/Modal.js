import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import { Link } from 'gatsby';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

export default class ModalButton extends React.Component {
  constructor ( props ) {
    super( props );
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind( this );
  }

  toggle () {
    this.setState( {
      modal: !this.state.modal,
    } );
  }

  render () {
    return (
      <div>
        <Button color="danger" onClick={ this.toggle }>{this.props.buttonLabel}</Button>
        <Modal isOpen={ this.state.modal } toggle={ this.toggle } className={ this.props.className }>
          <ModalHeader toggle={ this.toggle }>Modal title</ModalHeader>
          <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={ this.toggle }>Do Something</Button>{' '}
            <Button color="secondary" onClick={ this.toggle }>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
// export default class MyVerticallyCenteredModal extends React.Component {
//   render () {
//     return (
//       <Modal
//               { ...this.props }
//               size="lg"
//               aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter">
//                         Modal heading
//                     </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4>Centered Modal</h4>
//           <p>
//                         Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//                         dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
//                         ac consectetur ac, vestibulum at eros.
//                     </p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={ this.props.onHide }>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
// }
