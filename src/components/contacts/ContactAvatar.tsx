import { Picture } from "../../interfaces/contactInterface";
import styles from "./ContactAvatar.module.scss";

const ContactAvatar = ({ picture }: { picture: Picture }) => {
  return (
    <div className={styles.avatar}>
      <img src={picture.medium} alt="" />
    </div>
  );
};

export default ContactAvatar;
