import { useContext } from "react";
import { ActiveLetterContext } from "../context/ActiveLetterProvider";
import { DataContext } from "../context/ContactsProvider";
import Contact from "./Contact";
import Loader from "./Loader";

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
    <ul>
      {data.groupedResults[activeLetter]?.persons.map((person) => (
        <li key={person.login.uuid}>
          <Contact person={person} />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
