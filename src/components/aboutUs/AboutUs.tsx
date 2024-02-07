import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <div className="container">
      <div className={styles.aboutUs}>
        <div className={styles.left}>
          <img className={styles.leftImage} src="./aboutUs.png" alt="" />
        </div>
        <div className={styles.right}>
          <h1 className={styles.heading}>About us</h1>
          <p className={styles.description1}>
            We are a company that connects the world of real estate and finance.
            We provide a complete service for the sale, purchase or rental of
            real estate. Our advantage is more than 15 years of experience and
            soil in attractive locations in Slovakia with branches in Bratislava
            and Košice.
          </p>
          <p className={styles.description2}>
            We have a connection to all banks on the Slovak market, so we can
            solve everything under one roof. By constantly innovating our
            business activities, we move forward and we are able to offer truly
            above-standard services that set us apart from the competition.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs