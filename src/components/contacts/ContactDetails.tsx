import { Person } from "../../interfaces/contactInterface";
import ContactCardItem from "./ContactCardItem";
import styles from "./ContactDetails.module.scss";

const ContactDetails = ({ person }: { person: Person }) => {
  return (
    <ul className={styles.detailesWrapper}>
      <li>
        <ContactCardItem title={"email"} item={person.email} type="mailto" />
      </li>
      <li>
        <ContactCardItem title={"phone"} item={person.phone} type="tel" />
      </li>
      <li>
        <ContactCardItem
          title={"street"}
          item={`${person.location.street.number} ${person.location.street.name}`}
        />
      </li>
      <li>
        <ContactCardItem title={"city"} item={person.location.city} />
      </li>
      <li>
        <ContactCardItem title={"state"} item={person.location.state} />
      </li>
      <li>
        <ContactCardItem
          title={"postcode"}
          item={person.location.postcode.toString()}
        />
      </li>
    </ul>
  );
};

export default ContactDetails;
