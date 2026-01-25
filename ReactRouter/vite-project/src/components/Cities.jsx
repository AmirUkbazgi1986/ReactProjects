import styles from "./Cities.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import { useCities } from "../contexts/CitiesContext";

function Cities() {
  const { cities, isLoading } = useCities();
  // console.log("isLoading:", isLoading);
  // console.log("cities:", cities);

  if (isLoading) return <Spinner />;
  if (!cities || cities.length === 0)
    return <Message message="No cities found" />;

  return (
    <ul className={styles.cities}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default Cities;
