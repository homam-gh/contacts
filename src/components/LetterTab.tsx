import { useContext } from "react";
import { ActiveLetterContext } from "../context/ActiveLetterProvider";

const LetterTab = ({ letter, count }: { letter: string; count: number }) => {
  const { activeLetter, setActiveLetter } = useContext(ActiveLetterContext);

  return (
    <button
      type="button"
      onClick={() => setActiveLetter(letter)}
      disabled={activeLetter === letter}
    >
      {letter}, {count}
    </button>
  );
};

export default LetterTab;
