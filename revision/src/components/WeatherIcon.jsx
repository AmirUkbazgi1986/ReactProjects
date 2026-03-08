import { Heading, Stack } from "@chakra-ui/react";

function WeatherIcon() {
  return (
    <Stack align={"center"} space={4}>
      <Image height={200} width={200} />
      <Heading size={"md"}>rainy</Heading>
      <Heading size={"sm"} mb={4}>
        temperature, and rainfall
      </Heading>
    </Stack>
  );
}

export default WeatherIcon;
