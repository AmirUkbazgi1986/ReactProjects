import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" className={styles.link}>
      <img src="https://plus.unsplash.com/premium_photo-1675198764382-94d5c093df30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />{" "}
      WorldWise
    </Link>
  );
}

export default Logo;
