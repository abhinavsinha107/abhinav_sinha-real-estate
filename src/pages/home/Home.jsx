import styles from "./Home.module.css"

const Home = () => {
  return (
    <div className="container">
      <div className={styles.banner}>
        <div className={styles.left}>
          <div className={styles.moving}>
            <div className={styles.heading}>
              <h1 className={styles.headingText}>Modern living</h1>
              <h1 className={styles.headingText}> for everyone</h1>
              <p className={styles.paragraph}>
                We provide a complete service for the sale, purchase or rental
                of real estate. We have been operating in Madrid and Barcelona
                more than 15 years.
              </p>
            </div>
            <div className={styles.search}>
              
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="./headerPicture.jpg" className={styles.headerPic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home