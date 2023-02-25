import { Person } from "../interfaces/contactInterface";

export const getTabLetters = (arr: Person[]): string[] => {
  const letters: string[] = [];
  const set: Set<string> = new Set();

  arr.forEach((person) => {
    const firstLetter = person.name.first.charAt(0).toUpperCase();
    if (set.has(firstLetter)) {
      return;
    }
    set.add(firstLetter);
    letters.push(firstLetter);
  });

  return letters;
};
