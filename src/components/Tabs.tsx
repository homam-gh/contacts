import { useContext, useEffect, useState } from "react";
import { ActiveLetterContext } from "../context/ActiveLetterProvider";
import { DataContext } from "../context/ContactsProvider";
import { getTabLetters } from "../utils/getTabLetters";
import LetterTab from "./LetterTab";

const Tabs = () => {
  const { data } = useContext(DataContext);
  const [letters, setLetters] = useState<{ letter: string; count: number }[]>(
    []
  );
  const { setActiveLetter } = useContext(ActiveLetterContext);

  useEffect(() => {
    if (!data?.results?.length) return;
    const lettersList = getTabLetters(data.groupedResults);
    setLetters(lettersList);
    setActiveLetter(lettersList[0].letter);
  }, [data]);

  return (
    <nav>
      <ul>
        {letters.map((l) => (
          <li key={l.letter}>
            <LetterTab {...l} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
