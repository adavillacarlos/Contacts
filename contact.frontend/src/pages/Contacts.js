import React from "react";
import ContactForm from "../components/Form/ContactForm";
import ContactsList from "../components/List/ContactsList";
import Title from "../components/Title/Title";

export default function Contacts() {
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <Title title="User Contact Management" />
      <ContactForm />
      <hr style={{ border: "1px solid grey" }} />

      <ContactsList />
    </div>
  );
}
