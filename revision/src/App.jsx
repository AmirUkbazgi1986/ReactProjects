import {
  Container,
  Heading,
  Dialog,
  Button,
  Textarea,
  Field,
  Input,
  HStack,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import { parseWeather } from "../data/parseWeather";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [city, setCity] = useState({});
  useEffect(() => {
    async function fetchCity() {
      const latitude = 52.37403;
      const longitude = 4.88969;
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=weather_code,is_day,apparent_temperature,rain`,
      );
      if (!res.ok) throw new Error("could not fetch");
      const data = await res.json();
      const weatherObject = parseWeather(data);
    }
    fetchCity();
  }, [inputValue]);

  return (
    <Container maxW="container .xl" py={6}>
      <Flex
        flexDirection={"column"}
        gap={6}
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize={"2xl"} fontWeight={"bold"}>
          Winc Weather App
        </Heading>
        <HStack>
          <Input
            type="text"
            width="250px"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Button>Check</Button>
        </HStack>
        <Text>{city.name}</Text>
        <Text>{city.country_code}</Text>
        <MovieList />
      </Flex>
    </Container>
  );
}

export default App;
