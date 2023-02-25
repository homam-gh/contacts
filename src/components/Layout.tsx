import { PropsWithChildren } from "react";
import { DataProvider } from "../context/ContactsProvider";
import ContactsList from "./ContactsList";
import Header from "./Header";

import styles from "./Layout.module.scss";
import Tabs from "./Tabs";
import Toast from "./Toast";

const Layout = () => {
  return (
    <DataProvider>
      <main className={styles.main}>
        <Header />
        <Tabs />
        <ContactsList />
      </main>
      <Toast type="info" message="" />
    </DataProvider>
  );
};

export default Layout;
