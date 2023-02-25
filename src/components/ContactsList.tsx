import { loadavg } from "os";
import { useContext } from "react";
import { DataContext } from "../context/ContactsProvider";
import Loader from "./Loader";

const ContactsList = () => {
  const { data, error, isLoading } = useContext(DataContext);

  if (error) {
    return <h1>Error</h1>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return <div>ContactsList</div>;
};

export default ContactsList;
