import styles from "./Toast.module.scss";

type EventsType = "info" | "warning" | "error" | "success" | "default";

interface IProps {
  message: string;
  type?: EventsType;
}

const Toast = ({ message, type = "info" }: IProps) => {
  return (
    <div className={styles.toastContainer}>
      <div className={styles.toast}>{message}</div>
    </div>
  );
};

export default Toast;
