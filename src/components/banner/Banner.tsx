import styles from "./Banner.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Banner = () => {
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
              <div className={styles.select}>
                <select className={styles.dropdown}>
                  <option value="">Property Type</option>
                  <option>Sale</option>
                  <option>Rent</option>
                </select>
              </div>
              <div className={styles.searchInput}>
                <div className={styles.locationIcon}>
                  <FaLocationDot />
                </div>
                <div className={styles.inputBox}>
                  <input
                    className={styles.inputField}
                    placeholder="Search a location"
                  />
                </div>
              </div>
              <div className={styles.searchButton}>
                <button className={styles.btn}>
                  <div>
                    <CiSearch />
                  </div>
                  <p>Search</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img src="./headerPicture.jpg" className={styles.headerPic} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Banner;
