import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.navLink}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/signup" className={styles.navLink}>
              Signup
            </Link>
          </li>
          <li>
            <Link to="/logout" className={styles.navLink}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
