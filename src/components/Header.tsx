import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2 className={styles.pageTitle}>Contacts List</h2>
    </header>
  );
};

export default Header;
