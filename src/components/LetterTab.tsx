import { useContext } from "react";
import { ActiveLetterContext } from "../context/ActiveLetterProvider";

const LetterTab = ({ title }: { title: string }) => {
  const { activeLetter, setActiveLetter } = useContext(ActiveLetterContext);

  return (
    <button
      type="button"
      onClick={() => setActiveLetter(title)}
      disabled={activeLetter === title}
    >
      {title}
    </button>
  );
};

export default LetterTab;
