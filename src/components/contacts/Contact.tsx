import { useContext, useState } from "react";
import { Person } from "../../interfaces/contactInterface";
import ContactCard from "./ContactCard";

const Contact = ({ person }: { person: Person }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShow(!show)}>
        {person.name.title} {person.name.first} {person.name.last}
      </button>
      <ContactCard {...{ person, show }} onClose={() => setShow(false)} />
    </>
  );
};

export default Contact;
