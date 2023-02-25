import { useContext, useEffect, useState } from "react";
import { ActiveLetterContext } from "../context/ActiveLetterProvider";
import { DataContext } from "../context/ContactsProvider";
import { Person } from "../interfaces/contactInterface";
import { getTabLetters } from "../utils/getTabLetters";
import LetterTab from "./LetterTab";

const Tabs = () => {
  const { data } = useContext(DataContext);
  const [letters, setLetters] = useState<string[]>([]);
  const { activeLetter, setActiveLetter } = useContext(ActiveLetterContext);

  useEffect(() => {
    if (!data?.results?.length) return;
    setLetters(getTabLetters(data.results).sort());
    setActiveLetter(letters[0]);
  }, [data]);

  return (
    <nav>
      <ul>
        {letters.map((letter) => (
          <li key={letter}>
            <LetterTab title={letter} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
