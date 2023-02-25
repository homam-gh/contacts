import { createContext, useState, useEffect, PropsWithChildren } from "react";
import { configs } from "../config";
import { Person } from "../interfaces/contactInterface";
import { Info } from "../interfaces/info";
import { get } from "../services/api";

interface RndUserRrsponse {
  info: Info;
  results: Person[];
}

interface Context {
  data: RndUserRrsponse;
  isLoading: boolean;
  error: Error | null;
}

const DataContext = createContext<Context>({
  data: {
    info: {} as Info,
    results: [] as Person[],
  },
  isLoading: false,
  error: null,
});

const DataProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<RndUserRrsponse>({} as RndUserRrsponse);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await get<RndUserRrsponse>(
          `${configs.APIURL}?results=120`
        );

        setData(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
