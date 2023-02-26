import { useContext } from "react";
import { ActiveLetterContext } from "../../context/ActiveLetterProvider";
import { DataContext } from "../../context/ContactsProvider";
import Loader from "../Loader";
import Contact from "./Contact";

import styles from "./ContactsList.module.scss";

const ContactsList = () => {
  const { data, error, isLoading } = useContext(DataContext);
  const { activeLetter } = useContext(ActiveLetterContext);

  if (!!error) {
    return <h1>Error</h1>;
  }

  if (isLoading || !data?.groupedResults) {
    return <Loader />;
  }

  return (
    <div className={styles.contactsListContainer}>
      <ul className={styles.contactsList}>
        {data.groupedResults[activeLetter]?.persons.map((person) => (
          <li key={person.login.uuid} className={styles.contactWrapper}>
            <Contact person={person} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
