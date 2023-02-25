import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/ContactsProvider";
import { Person } from "../interfaces/contactInterface";
import { getTabLetters } from "../utils/getTabLetters";
import LetterTab from "./LetterTab";

const Tabs = () => {
  const { data } = useContext(DataContext);
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    if (!data?.results?.length) return;
    setLetters(getTabLetters(data.results).sort());
  }, [data]);

  return (
    <nav>
      <ul>
        {letters.map((letter) => (
          <LetterTab title={letter} key={letter} />
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
