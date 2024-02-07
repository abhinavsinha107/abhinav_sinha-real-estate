import Card from "../card/Card";
import styles from "./TopOffers.module.css"

const TopOffers = () => {
  return (
    <div className="bg-color">
      <div className="container">
        <div className={styles.topOffers}>
          <h1 className={styles.heading}>Top offers</h1>
          <div className={styles.subHeading}>
            <div className={styles.description}>
              <p className={styles.paraDesc}>
                Fulfill your career dreams, enjoy all the achievements of the
                city center and luxury housing to the fullest.
              </p>
            </div>
            <div className={styles.offersButton}>
              <button className={styles.btn}>Show all offers</button>
            </div>
          </div>
          <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopOffers