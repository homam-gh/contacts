import { Name } from "../../interfaces/contactInterface";
import styles from "./ContactCardTitle.module.scss";

const ContactCardTitle = ({ name }: { name: Name }) => {
  return (
    <h6 className={styles.cardTitle}>
      {name?.title} {name.first} {name.last}
    </h6>
  );
};

export default ContactCardTitle;
