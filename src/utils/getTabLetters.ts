import { GroupedPersons } from "./getGroupedPersons";

export const getTabLetters = (
  obj: GroupedPersons
): { letter: string; count: number }[] => {
  const output: { letter: string; count: number }[] = [];

  Object.keys(obj).forEach((key) => {
    output.push({ letter: key, count: obj[key].persons.length });
  });

  return output;
};
