import { IconClose } from "../../shared/icons";
import styles from "./ContactCloseButton.module.scss";

const ContactCloseButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={styles.close} onClick={onClick}>
      <IconClose />
    </button>
  );
};

export default ContactCloseButton;
