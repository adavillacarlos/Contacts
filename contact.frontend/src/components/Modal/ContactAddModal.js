import React from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "../Form/ContactForm";

export default function ContactAddModal({show, onHide}) {

  return (
    <Modal show={show} onHide={() => onHide()}>
      <Modal.Header closeButton>
        <Modal.Title>Add Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactForm setIsEditing={onHide}/>
      </Modal.Body>
    </Modal>
  );
}
