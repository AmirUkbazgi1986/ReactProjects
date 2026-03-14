import { Button, HStack, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import {
  setLocationName,
  setLocationCoordinates,
} from "../features/locationSlice";
import { useDispatch } from "react-redux";

function LocationSearch() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  async function fetchCoordinates() {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(inputValue)}`,
    );
    const json = await response.json();
    const location = json.results[0];
    console.log(location);
    dispatch(setLocationName(`${location.name}, ${location.country}`));

    dispatch(
      setLocationCoordinates({
        longitude: location.longitude,
        latitude: location.latitude,
      }),
    );

    if (!json.results || json.results.length === 0) {
      console.error("Not a valid location!");
      return;
    }
  }

  return (
    <VStack>
      <HStack>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="size (md)"
          size="md"
        />
        <Button onClick={fetchCoordinates}>check</Button>
      </HStack>
    </VStack>
  );
}

export default LocationSearch;
