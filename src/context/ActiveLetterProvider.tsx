import { createContext, PropsWithChildren, useMemo, useState } from "react";

interface ActiveLetterContext {
  activeLetter: string;
  setActiveLetter: (l: string) => void;
}

export const ActiveLetterContext = createContext<ActiveLetterContext>(
  {} as ActiveLetterContext
);

const ActiveLetterProvider = ({ children }: PropsWithChildren) => {
  const [activeLetter, setActiveLetter] = useState("");

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
