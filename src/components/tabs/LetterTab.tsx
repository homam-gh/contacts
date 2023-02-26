import { useContext } from "react";
import { ActiveLetterContext } from "../../context/ActiveLetterProvider";

import styles from "./LetterTab.module.scss";

const LetterTab = ({ letter, count }: { letter: string; count: number }) => {
  const { activeLetter, setActiveLetter } = useContext(ActiveLetterContext);
  const isActive = activeLetter === letter;

  return (
    <button
      className={`${styles.tab} ${isActive ? styles.isActive : ""}`}
      type="button"
      onClick={() => setActiveLetter(letter)}
      disabled={isActive}
    >
      <h3 className={styles.letterTitle}>{letter}</h3>
      <div className={styles.count}>{count}</div>
    </button>
  );
};

export default LetterTab;
