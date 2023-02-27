import { IconLogo } from "../shared/icons";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <IconLogo />
      </div>
      <h2 className={styles.pageTitle}>Contacts List</h2>
    </header>
  );
};

export default Header;
