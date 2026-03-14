import { Button, HStack, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  setLocationCoordinates,
  setLocationName,
} from "../features/locationSlice";
import { useState } from "react";

function Location() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const fetchCoordinates = async (inputValue) => {
    try {
      const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(inputValue)}`,
      );
      if (!res.ok) throw new Error("Could not fetch");

      const data = await res.json();

      if (!data.results[0] && data.results.length === 0) return;

      const location = data.results[0];

      dispatch(setLocationName(`${location.name}, ${location.country}`));

      dispatch(
        setLocationCoordinates({
          latitude: location.latitude,
          longitude: location.longitude,
        }),
      );
    } catch (err) {
      console.error(`${err.message}`);
    }
  };
  return (
    <HStack>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={() => fetchCoordinates(inputValue)}>check</Button>
    </HStack>
  );
}

export default Location;
