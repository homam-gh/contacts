import { Person } from "../interfaces/contactInterface";

const ContactCard = ({ person, show }: { person: Person; show: boolean }) => {
  return <div>{show ? "kiri" : "kooni"}</div>;
};

export default ContactCard;
