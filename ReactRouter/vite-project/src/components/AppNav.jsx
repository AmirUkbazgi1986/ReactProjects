import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <div className={styles.appNav}>
      <NavLink to="cities">cities</NavLink>
      <NavLink to="countries">countries</NavLink>
    </div>
  );
}

export default AppNav;
