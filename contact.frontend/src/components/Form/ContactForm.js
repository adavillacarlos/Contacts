import React, { useState, useEffect } from "react";
import { Form, FormControl, Row, Col, Button } from "react-bootstrap";
import {
  EditContact,
  DeleteContact,
  NewContact,
} from "../../services/contacts";
import { useDispatch } from "react-redux";

export default function ContactForm({ contact, setIsEditing }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const [isNewContact, setIsNewContact] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contact !== undefined) {
      setIsNewContact(false);
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setBillingAddress(contact.billingAddress);
      setDeliveryAddress(contact.deliveryAddress);
    } else {
      setIsNewContact(true);
    }
  }, [contact]);

  const handleDelete = () => {
    DeleteContact(dispatch, contact); 
    setIsEditing(false); 
  }

  return (
    <div>
      <Form
        className="mt-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (isNewContact) {
            //create new contact
            NewContact(dispatch, {
              firstName: firstName,
              lastName: lastName,
              billingAddress: billingAddress,
              deliveryAddress: deliveryAddress,
            });
          } else {
            //edit contact
            EditContact(dispatch, {
              id: contact.id,
              firstName: firstName,
              lastName: lastName,
              billingAddress: billingAddress,
              deliveryAddress: deliveryAddress,
            });
            setIsEditing(false);
          }
        }}
      >
        <Row>
          <Col sm={6}>
            <Form.Label>First Name</Form.Label>
            <FormControl
              placeholder={firstName}
              as="input"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Col>
          <Col sm={6}>
            <Form.Label>Last Name</Form.Label>
            <FormControl
              placeholder={lastName}
              as="input"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Form.Label>Billing Address</Form.Label>
            <FormControl
              placeholder={billingAddress}
              as="input"
              onChange={(e) => {
                setBillingAddress(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Form.Label>Delivery Address</Form.Label>
            <FormControl
              placeholder={deliveryAddress}
              as="input"
              onChange={(e) => {
                setDeliveryAddress(e.target.value);
              }}
            />
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="d-grid gap-2 d-md-flex justify-content-md-end">
            {isNewContact ? (
              <Button variant="primary" type="submit">
                Add
              </Button>
            ) : (
              <div>
                <Button
                  className="ml-3"
                  variant="danger"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
                <Button className="mx-3" variant="success" type="submit">
                  Save
                </Button>
                <Button variant="secondary" onClick={() => setIsEditing(false)}>
                  Cancel
                </Button>
              </div>
            )}
          </Col>
        </Row>
      </Form>
    </div>
  );
}
