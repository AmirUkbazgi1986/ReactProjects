import { Box, SimpleGrid, Text } from "@chakra-ui/react";
function Dashboard() {
  return (
    <SimpleGrid columns={4} gap="10px" minChildWidth="150px">
      <Box bg="white" h="200px" border="1px solid ">
        <Text color={{ base: "pink", md: "blue", lg: "green" }}>Hellow</Text>
      </Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>

      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>

      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
    </SimpleGrid>
  );
}

export default Dashboard;
