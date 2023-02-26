import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DataContext } from "./ContactsProvider";

interface ActiveLetterContext {
  activeLetter: string;
  setActiveLetter: (l: string) => void;
}

export const ActiveLetterContext = createContext<ActiveLetterContext>(
  {} as ActiveLetterContext
);

const ActiveLetterProvider = ({ children }: PropsWithChildren) => {
  const { data, isLoading, error } = useContext(DataContext);
  const [activeLetter, setActiveLetter] = useState("");

  useEffect(() => {
    if (!!error || isLoading || !data.groupedResults) return;
    const firstLetter = Object.keys(data.groupedResults)[0];
    setActiveLetter(firstLetter);
  }, [data]);

  const value = useMemo(
    () => ({ activeLetter, setActiveLetter }),
    [activeLetter, setActiveLetter]
  );

  return (
    <ActiveLetterContext.Provider value={value}>
      {children}
    </ActiveLetterContext.Provider>
  );
};

export default ActiveLetterProvider;
