import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  Stack,
} from "@chakra-ui/react";
function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center">
      <Heading as="h1" fontWeight="bold">
        Dojo Tasks
      </Heading>
      <Spacer />
      <Flex gap="20px" align="center">
        <Box bg="gray.200" p="10px">
          M
        </Box>
        <Text>mario@netninja.dev</Text>
        <Button
          bg="purple.500"
          py={6}
          px={4}
          _hover={{ bg: "purple.400" }}
          size="md"
          // _active={{ bg: "red.700" }}
          // _focus={{ boxShadow: "outline" }}
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
