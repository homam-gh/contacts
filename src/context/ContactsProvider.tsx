import { createContext, useState, useEffect, PropsWithChildren } from "react";
import { configs } from "../config";
import { Person } from "../interfaces/contactInterface";
import { Info } from "../interfaces/info";
import { get } from "../services/api";
import {
  GroupedPersons,
  groupPersonsByFirstLetter,
} from "../utils/getGroupedPersons";

interface RndUserRrsponse {
  info: Info;
  results: Person[];
}

interface GroupedResponse extends RndUserRrsponse {
  groupedResults: GroupedPersons;
}

interface Context {
  data: GroupedResponse;
  isLoading: boolean;
  error: Error | null;
}

const DataContext = createContext<Context>({
  data: {
    info: {} as Info,
    results: [],
    groupedResults: {},
  },
  isLoading: false,
  error: null,
});

const DataProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<GroupedResponse>({} as GroupedResponse);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await get<RndUserRrsponse>(
          `${configs.APIURL}?results=120`
        );

        setData({
          ...response.data,
          groupedResults: groupPersonsByFirstLetter(response.data.results),
        });
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
