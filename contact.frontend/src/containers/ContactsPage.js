import React, { useState } from "react";
import ContactsTable from "../components/List/ContactsTable";
import { ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";
import ContactAddModal from "../components/Modal/ContactAddModal";
export default function ContactsPage() {
  //Modal
  const [show, setShow] = useState(false);
  const handleHide = () => setShow(false);

  return (
    <div className="container justify-content-center">
      <ToastContainer />
      <div className="row mt-4">
        <div className="col-md-6">
          <Button variant="primary" onClick={() => setShow(true)}>
            Add Contact
          </Button>
        </div>
        <div className="col"></div>
      </div>
      <ContactAddModal show={show} onHide={handleHide} />

      <hr style={{ border: "1px solid grey" }} />
      <ContactsTable />
    </div>
  );
}
