import { Link } from "react-router-dom";
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
          <Link to="/login">
            <div className={styles.headerRight2}>
              <button>Login</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
