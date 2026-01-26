import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  Stack,
  Avatar,
} from "@chakra-ui/react";

import { toaster } from "../components/ui/toaster";

function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="h1" fontWeight="bold">
        Dojo Tasks
      </Heading>
      <Spacer />
      <Flex gap="20px" align="center">
        <Box position="relative" display="inline-block">
          <Avatar.Root size="lg">
            <Avatar.Fallback name="mario" />
            <Avatar.Image src="./chakraUi-fotos/mario.png" />
          </Avatar.Root>

          {/* Badge with text */}
          <Box
            position="absolute"
            bottom={0}
            right={0}
            width={6} // bigger for text
            height={6}
            bg="red.500"
            border="2px solid white"
            borderRadius="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="xs"
            fontWeight="bold"
            color="white"
          >
            3
          </Box>
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
          onClick={() =>
            toaster.create({
              title: "Test toast",
              description: (
                <Box p={6} bg="green.500" color="white" borderRadius="md">
                  <Text fontWeight="bold">Task Created</Text>
                  <Text>Your task was added successfully.</Text>
                </Box>
              ),
              type: "success",
              duration: 3000,
            })
          }
        >
          Logout
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
