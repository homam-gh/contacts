import styles from "./ContactCardItem.module.scss";

const ContactCardItem = ({
  title,
  item,
  type,
}: {
  title?: string;
  item?: string;
  type?: "mailto" | "tel";
}) => {
  return (
    <div className={styles.itemWrapper}>
      <div className={styles.title}>{title}</div>
      {!!type && !!item ? (
        <a href={`${type}:${item}`} className={styles.item}>
          {item}
        </a>
      ) : (
        <div className={styles.item}>{item}</div>
      )}
    </div>
  );
};

export default ContactCardItem;
