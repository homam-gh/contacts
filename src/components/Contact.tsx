import { useState } from "react";
import { Person } from "../interfaces/contactInterface";
import ContactCard from "./ContactCard";

const Contact = ({ person }: { person: Person }) => {
  const [showContact, setShowContact] = useState(false);
  return (
    <>
      <button type="button">
        {person.name.title} {person.name.first} {person.name.last}
      </button>
      <ContactCard person={person} show={showContact} />
    </>
  );
};

export default Contact;
