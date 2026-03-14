import { Heading, Stack, Image } from "@chakra-ui/react";

function Weather({ weather }) {
  console.log(weather);
  return (
    <Stack align={"center"}>
      <Image src={weather.imageSrc} alt={weather.imageAlt} />

      <Heading>{Weather.weatherType}</Heading>
      <Heading>
        {weather.temperature}, {weather.rainfall}
      </Heading>
    </Stack>
  );
}

export default Weather;
