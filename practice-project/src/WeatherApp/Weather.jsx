import { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    async function getWeather() {
      const res = await fetch(
        "https://geocoding-api.open-meteo.com/v1/search?name=Almkerk",
      );
      if (!res.ok) throw new Error("something went wrong during fetching!");
      const data = await res.json();
      const [dataEl] = data.results;
      setWeather(dataEl);
    }
    getWeather();
  }, []);
  return (
    <div>
      <p>{weather.name}</p>
      <p>{weather.country_code} </p>
    </div>
  );
}

export default Weather;
