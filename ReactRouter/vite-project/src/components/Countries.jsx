import styles from "./Countries.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import { useCities } from "../contexts/CitiesContext";

function Countries() {
  // console.log("isLoading:", isLoading);
  // console.log("cities:", cities);
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities || cities.length === 0)
    return <Message message="No cities found" />;

  const countries = cities.reduce((arr, cur) => {
    if (!arr.map((el) => el.country).includes(cur.country)) {
      return [...arr, { emoji: cur.emoji, country: cur.country }];
    } else {
      return arr;
    }
  }, []);

  // console.log("countries", countries);
  return (
    <div className={styles.countries}>
      {countries.map((countryEl) => (
        <CountryItem key={countryEl.country} countryEl={countryEl} />
      ))}
    </div>
  );
}

export default Countries;
