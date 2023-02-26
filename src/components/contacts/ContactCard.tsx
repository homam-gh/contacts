import { useEffect, useRef } from "react";
import { Person } from "../../interfaces/contactInterface";
import ContactAvatar from "./ContactAvatar";
import styles from "./ContactCard.module.scss";
import ContactCardTitle from "./ContactCardTitle";
import ContactCloseButton from "./ContactCloseButton";
import ContactDetails from "./ContactDetails";

const ContactCard = ({
  person,
  show,
  onClose,
}: {
  person: Person;
  show: boolean;
  onClose: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { name } = person;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  if (!show) return null;
  return (
    <div className={styles.contactCard} ref={ref}>
      <ContactCloseButton onClick={onClose} />
      <ContactAvatar picture={person.picture} />
      <div className={styles.contentWrapper}>
        <ContactCardTitle {...{ name }} />
        <ContactDetails {...{ person }} />
      </div>
    </div>
  );
};

export default ContactCard;
