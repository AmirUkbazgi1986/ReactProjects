import { WeatherIcon } from "./components/WeatherIcon";

import { useSelector, useDispatch } from "react-redux";
import { setWeather } from "./features/weatherSlice";
import { Heading, Center, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { parseWeather } from "./utils/weatherParser";
import LocationSearch from "./components/LocationSearch";

export const App = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather.currentWeather);
  const locationName = useSelector((state) => state.location.name);
  const locationCoordinates = useSelector(
    (state) => state.location.coordinates,
  );

  useEffect(() => {
    const controller = new AbortController();
    // let ignore = false;
    if (!locationCoordinates) return;

    async function fetchWeather() {
      //   const latitude = 52.37403;
      //   const longitude = 4.88969;
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${locationCoordinates.latitude}&longitude=${locationCoordinates.longitude}&current=weather_code,is_day,apparent_temperature,rain`,
          { signal: controller.signal }, // 👈 connect controller
        );
        const json = await response.json();
        const weatherObject = parseWeather(json);
        dispatch(setWeather(weatherObject));

        //   if (!ignore) {
        //     const weatherObject = parseWeather(json);
        //     dispatch(setWeather(weatherObject));
        //   }
      } catch (err) {
        if (err.name === "AbortError") {
          return;
        }
      }
    }

    fetchWeather();
    // 👇 Cleanup
    return () => {
      //   ignore = true;
    };
  }, [locationCoordinates]);

  return (
    <Center height="100vh">
      <Stack>
        <Heading
          size="2xl"
          color="blue.400"
          textAlign="center"
          fontStyle="italic"
        >
          Winc Weather App
        </Heading>
        <LocationSearch />
        <Heading>{locationName}</Heading>
        {weather && <WeatherIcon weather={weather} />}
      </Stack>
    </Center>
  );
};
