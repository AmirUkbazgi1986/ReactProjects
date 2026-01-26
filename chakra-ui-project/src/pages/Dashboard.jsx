import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  Avatar,
} from "@chakra-ui/react";
import { FaEdit, FaEye } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
function Dashboard() {
  const tasks = useLoaderData();
  // console.log(tasks);
  return (
    <SimpleGrid columns={4} gap="20px" minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card.Root
            key={task.id}
            padding="10px"
            borderTopWidth="8px"
            borderTopColor="purple.400"
            bg="white"
          >
            <Card.Header>
              <Flex gap="20px">
                <Box width="50px" height="50px">
                  <Avatar.Root>
                    <Avatar.Fallback name={task.author} />
                    <Avatar.Image src={task.img} />
                  </Avatar.Root>
                </Box>
                <Box>
                  <Heading as="h3" size="sm" fontWeight={"bold"}>
                    {task.title}
                  </Heading>
                  <Text color={"gray.500"}>by {task.author}</Text>
                </Box>
              </Flex>
            </Card.Header>
            <Card.Body color="gray.500">
              <Text>{task.description}</Text>
            </Card.Body>

            <Box h="1px" bg="gray.200" marginTop="10px" marginBottom="10px" />
            <Card.Footer>
              <Stack direction="row" marginLeft="10px">
                <Flex
                  align="center"
                  // bg="gray.300"
                  py="5px"
                  px="20px"
                  borderRadius="5px"
                >
                  <Icon as={FaEye} mr={3} />
                  <Button
                    bg="transparent"
                    color="blackAlpha.700"
                    fontWeight="bold"
                    // variant="solid"
                  >
                    Watch
                  </Button>
                </Flex>
                <Flex
                  align="center"
                  // bg="gray.300"
                  py="5px"
                  px="20px"
                  borderRadius="5px"
                >
                  <Icon as={FaEdit} mr={3} />
                  <Button
                    bg="transparent"
                    color="blackAlpha.700"
                    fontWeight="bold"
                    // variant="outline"
                  >
                    Comment
                  </Button>
                </Flex>
              </Stack>
            </Card.Footer>
          </Card.Root>
        ))}
    </SimpleGrid>
  );
}

export default Dashboard;
