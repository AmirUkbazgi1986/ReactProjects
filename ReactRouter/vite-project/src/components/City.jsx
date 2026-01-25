import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

import styles from "./City.module.css";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();

  // console.log(getCity, id);

  useEffect(
    function () {
      getCity(id);
    },
    [id]
  );
  // console.log(currentCity);
  const { cityName, emoji, date, note } = currentCity;
  if (isLoading) return <Spinner />;

  const formDataEvent = (date) =>
    new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(new Date(date));

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City Name</h6>
        <h3>
          <img src={emoji} alt="" /> {cityName}
        </h3>
      </div>
      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formDataEvent(date || null)}</p>
      </div>
      {note && (
        <div className={styles.row}>
          <h6>Your note</h6>
          <p>{note}</p>
        </div>
      )}
      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div>
        <BackButton />
      </div>
    </div>
  );
}

export default City;
