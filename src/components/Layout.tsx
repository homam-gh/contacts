import ActiveLetterProvider from "../context/ActiveLetterProvider";
import { DataProvider } from "../context/ContactsProvider";
import ContactsList from "./ContactsList";
import Header from "./Header";

import styles from "./Layout.module.scss";
import Tabs from "./Tabs";
import Toast from "./Toast";

const Layout = () => {
  return (
    <DataProvider>
      <ActiveLetterProvider>
        <main className={styles.main}>
          <Header />
          <Tabs />
          <ContactsList />
        </main>
        <Toast type="info" message="" />
      </ActiveLetterProvider>
    </DataProvider>
  );
};

export default Layout;
