import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetContacts } from "../../services/contacts";
import EditIcon from "@mui/icons-material/Edit";
import ContactForm from "../Form/ContactForm";
import ContactEditModal from "../Modal/ContactEditModal"
export default function ContactsList() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactsReducer.contacts);

  useEffect(() => {
    GetContacts(dispatch);
  }, []);

  return contacts.map((e) => (
    <div key={e.id} style={{ marginBottom: "1rem" }}>
      <ListRow contact={e} />
    </div>
  ));
}

const ListRow = ({ contact }) => {
  const [isEditing, setIsEditing] = useState(false);
  //Show Modal
  const [show, setShow] = useState(false);
  const handleHide = () => setShow(false);

  const handleEditing = () => {
    setIsEditing(!isEditing)
    setShow(true); 
  }
//okay
  return isEditing ? (
    <ContactEditModal show={show} handleHide={handleHide} contact={contact} setIsEditing={setIsEditing} />
  ) : (
    <div>
      <Row>
        <Col>{contact.firstName}</Col>
        <Col>{contact.lastName}</Col>
        <Col>{contact.billingAddress}</Col>
        <Col>{contact.deliveryAddress}</Col>
        <Col>
          <Button
            className="mx-2"
            variant="outline-info"
            size="sm"
            onClick={() => handleEditing()}
          >
            <EditIcon />
          </Button>
        </Col>
      </Row>
      <hr />
    </div>
  );
};
