import React from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "../Form/ContactForm";
export default function ContactModal({show, onHide, contact, setIsEditing}) {
   return (
    <div>
      <Modal show={show} onHide={() => setIsEditing()}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm contact={contact} setIsEditing={setIsEditing}/>
        </Modal.Body>
      </Modal>
    </div>
  );
}
