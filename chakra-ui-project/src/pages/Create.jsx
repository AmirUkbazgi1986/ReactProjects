import {
  Box,
  Checkbox,
  Input,
  Stack,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">
        <Stack spaceY={2}>
          <Text as="label">Task name: </Text>
          <Input
            type="text"
            name="title"
            placeholder="Enter task name"
            px={2}
          />
          <Text fontSize="sm" color="gray.500">
            Enter a descriptive task name.
          </Text>
        </Stack>
        <Stack spaceY={2} mt="40px">
          <Text as="label">Task description: </Text>
          <Textarea
            placeholder="Enter a detailed description for the task..."
            name="description"
            padding={6}
          />
        </Stack>
        <Stack spaceY={2} mt="40px">
          <Checkbox.Root value="isPriority">
            <Checkbox.HiddenInput name="isPriority" />
            <Checkbox.Control />
            <Checkbox.Label>make this a priority task.</Checkbox.Label>
          </Checkbox.Root>
        </Stack>
        <Button type="submit" mt="30px" px="20px" py="10px" bg={"purple"}>
          Submit
        </Button>
      </Form>
    </Box>
  );
}

export default Create;
