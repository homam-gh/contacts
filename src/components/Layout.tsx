import ActiveLetterProvider from "../context/ActiveLetterProvider";
import { DataProvider } from "../context/ContactsProvider";
import ContactsList from "./contacts/ContactsList";
import Header from "./Header";
import { toast, ToastContainer } from "react-toastify";

import styles from "./Layout.module.scss";
import Tabs from "./tabs/Tabs";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <DataProvider>
      <ActiveLetterProvider>
        <main className={styles.main}>
          <Header />
          <Tabs />
          <ContactsList />
        </main>
        <ToastContainer />
      </ActiveLetterProvider>
    </DataProvider>
  );
};

export default Layout;
