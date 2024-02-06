import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.logo}>
            <img src="./logo.png" alt="" />
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.headerRight1}>
            <nav>
              <ul>
                <li>Top Offers</li>
                <li>Search in offers</li>
                <li>References</li>
                <li>About Us</li>
                <li>Our Team</li>
              </ul>
            </nav>
          </div>
          <div className={styles.headerRight2}>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
