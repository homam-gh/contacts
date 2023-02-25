import { Person } from "../interfaces/contactInterface";

export const getTabLetters = (
  arr: Person[]
): { letter: string; count: number }[] => {
  const letters: { letter: string; count: number }[] = [];

  arr.forEach((person) => {
    const firstLetter = person.name.first.charAt(0).toUpperCase();
    const letterObj = letters.find((obj) => obj.letter === firstLetter);
    if (letterObj) {
      letterObj.count++;
    } else {
      letters.push({ letter: firstLetter, count: 1 });
    }
  });

  letters.sort((a, b) => {
    if (a.letter < b.letter) {
      return -1;
    }
    if (a.letter > b.letter) {
      return 1;
    }
    return 0;
  });

  return letters;
};
