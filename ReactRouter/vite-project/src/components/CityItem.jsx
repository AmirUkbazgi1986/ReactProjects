import { useCities } from "../contexts/CitiesContext";

import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity } = useCities();
  if (!city) return null;

  const { cityName, emoji, date, id, position } = city;
  // console.log("Rendering CityItem:", city);
  return (
    <li
      className={`${styles.cityItem} ${
        id === currentCity.id ? styles["cityItem--active"] : ""
      }`}
    >
      <Link
        className={styles.link}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <div className={styles.name}>
          <img src={emoji} alt="" className={styles.emoji} />
          <h3 className={styles.heading}>{cityName}</h3>
        </div>
        <div className={styles.time}>
          <time className={styles.date}>{formatDate(date)}</time>
          <button className={styles.deleteBtn}>x</button>
        </div>
      </Link>
    </li>
  );
}

export default CityItem;
