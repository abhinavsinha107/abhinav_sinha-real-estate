import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.propertyImage}>
        <img src="" alt="" />
      </div>
      <div className={styles.content}>
        <p className={styles.desc}>Large 4 - room apartment with a beautiful terrace</p>
        <p className={styles.price}>320 000$</p>
        <p className={styles.place}>Barcelona IX.</p>
      </div>
    </div>
  );
};
export default Card;
