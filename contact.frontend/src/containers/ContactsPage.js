import React from "react";
import ContactForm from "../components/Form/ContactForm";
import ContactsList from "../components/List/ContactsList";
import { ToastContainer } from "react-toastify";

export default function ContactsPage() {
  return (
    <div
      className="justify-content-center"
      style={{ width: "60%", margin: "auto" }}
    >
      <ToastContainer />

      <div style={{ width: "60%", margin: "auto" }}>
        <ContactForm />
      </div>

      <hr style={{ border: "1px solid grey" }} />

      <ContactsList />
    </div>
  );
}
