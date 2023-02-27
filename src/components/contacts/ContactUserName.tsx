import { useCallback } from "react";
import { toast } from "react-toastify";
import toastGlobalConfig from "../../shared/toastConfig";
import styles from "./ContactUserName.module.scss";

const ContactUserName = ({ user }: { user: string }) => {
  const copy = useCallback(() => {
    navigator.clipboard.writeText(user);
    toast("Username copied to clipboard successfully.", toastGlobalConfig);
  }, [user]);

  return (
    <div className={styles.username} tabIndex={1} onClick={copy}>
      ({user})
    </div>
  );
};

export default ContactUserName;
