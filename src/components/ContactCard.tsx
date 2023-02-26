import { Person } from "../interfaces/contactInterface";

const ContactCard = ({ person, show }: { person: Person; show: boolean }) => {
  return <div>{show ? "show" : "no show"}</div>;
};

export default ContactCard;
