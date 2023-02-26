import { Person } from "../interfaces/contactInterface";

export interface GroupedPersons {
  [letter: string]: Person[];
}

export const groupPersonsByFirstLetter = (
  persons: Person[]
): GroupedPersons => {
  const groupedPersons: GroupedPersons = {};

  persons.forEach((person) => {
    const firstLetter = person.name.first.charAt(0).toUpperCase();

    if (!groupedPersons[firstLetter]) {
      groupedPersons[firstLetter] = [];
    }

    groupedPersons[firstLetter].push(person);
  });

  // Sort the array of persons within each letter group
  for (const letter in groupedPersons) {
    groupedPersons[letter].sort((a, b) =>
      a.name.first.localeCompare(b.name.first)
    );
  }

  // Sort the keys (letters) of the groupedPersons object
  const sortedLetters = Object.keys(groupedPersons).sort();

  // Create a new object with sorted letters and sorted persons
  const result: GroupedPersons = {};
  sortedLetters.forEach((letter) => {
    result[letter] = groupedPersons[letter];
  });

  return result;
};
