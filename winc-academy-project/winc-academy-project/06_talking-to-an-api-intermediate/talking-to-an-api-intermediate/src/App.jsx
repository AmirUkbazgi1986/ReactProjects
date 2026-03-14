import { Heading, Center, Stack } from "@chakra-ui/react";
import Weather from "./components/Weather";
import Location from "./components/Location";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { parseWeather } from "./utils/weatherParser";
import { setWeather } from "./features/weatherSlice";

export const App = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.currentWeather);

  const locationCoordinates = useSelector(
    (state) => state.location.coordinates,
  );

  const locationName = useSelector((state) => state.location.name);

  useEffect(() => {
    let ignore = false;
    if (!locationCoordinates) return;

    async function fetchWeather() {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${locationCoordinates.latitude}&longitude=${locationCoordinates.longitude}&current=weather_code,is_day,apparent_temperature,rain`,
        );

        if (!res.ok) throw new Error("Could not find the location!");

        const data = await res.json();

        if (!ignore) {
          const weatherObject = parseWeather(data);

          dispatch(setWeather(weatherObject));
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchWeather();

    return () => {
      ignore = true;
    };
  }, [locationCoordinates]);
  return (
    <Center height="100vh">
      <Stack>
        <Heading size="2xl" textAlign="center" mb="6">
          Winc Weather App
        </Heading>
        <Location />
        <Heading>{locationName}</Heading>
        {weather && <Weather weather={weather} />}
      </Stack>
    </Center>
  );
};
