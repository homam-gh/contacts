import { useState } from "react";
import { Person } from "../../interfaces/contactInterface";
import ContactCard from "./ContactCard";
import styles from "./Contact.module.scss";

const Contact = ({ person }: { person: Person }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShow(!show)}
        className={`${styles.contact} ${show ? styles.activeContact : ""}`}
      >
        {person.name.title} {person.name.first} {person.name.last}
      </button>
      {show && <ContactCard {...{ person }} onClose={() => setShow(false)} />}
    </>
  );
};

export default Contact;
