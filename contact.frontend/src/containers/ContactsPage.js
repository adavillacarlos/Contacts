import React from "react";
import ContactForm from "../components/Form/ContactForm";
import ContactsList from "../components/List/ContactsList";
import Title from "../components/Title/Title";
import { ToastContainer } from "react-toastify";

export default function ContactsPage() {
  return (
    <div style={{ width: "60%", margin: "auto" }}>
       <ToastContainer />

      <Title title="User Contact Management" />
      <ContactForm />
      <hr style={{ border: "1px solid grey" }} />

      <ContactsList />
    </div>
  );
}
