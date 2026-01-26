import { Tabs, List, ListItem, Icon, Flex } from "@chakra-ui/react";
import {
  FaCheckCircle,
  FaEnvelope,
  FaRegCommentAlt,
  FaStar,
  FaTimesCircle,
} from "react-icons/fa";

function Profile() {
  return (
    <Tabs.Root mt="40px" p="20px" variant="enclosed">
      <Tabs.List gap="20px" mb="20px">
        <Tabs.Trigger
          value="Account Info"
          color="purple.500"
          borderBottomColor="purple.500"
          fontSize={"xl"}
          _selected={{ color: "white", bg: "purple.400" }}
          _hover={{ bg: "purple.200", color: "white" }}
          p={8}
        >
          Account Info
        </Tabs.Trigger>
        <Tabs.Trigger
          value="Task History"
          color="purple.500"
          borderBottomColor="purple.500"
          fontSize={"xl"}
          _selected={{ color: "white", bg: "purple.400" }}
          _hover={{ bg: "purple.200", color: "white" }}
          p={8}
        >
          Task History
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="Account Info">
        <List.Root fontSize="1.2em" unstyled spaceY="20px">
          <List.Item>
            <Flex align="center" gap="20px">
              <Icon as={FaEnvelope} />
              Email: maria@netninja.net
            </Flex>
          </List.Item>
          <List.Item>
            <Flex align="center" gap="20px">
              <Icon as={FaRegCommentAlt} />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae, animi.
            </Flex>
          </List.Item>
          <List.Item>
            <Flex align="center" gap="20px">
              <Icon as={FaStar} />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
              doloremque!
            </Flex>
          </List.Item>
        </List.Root>
      </Tabs.Content>
      <Tabs.Content value="Task History">
        <List.Root fontSize="1.2em" unstyled spaceY="20px">
          <List.Item>
            <Flex align="center" gap="20px">
              <Icon as={FaCheckCircle} />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Flex>
          </List.Item>
          <List.Item>
            <Flex align="center" gap="20px">
              <Icon as={FaTimesCircle} />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae, animi.
            </Flex>
          </List.Item>
          <List.Item>
            <Flex align="center" gap="20px">
              <Icon as={FaCheckCircle} />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Flex>
          </List.Item>
          <List.Item>
            <Flex align="center" gap="20px">
              <Icon as={FaTimesCircle} />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae, animi.
            </Flex>
          </List.Item>
          <List.Item>
            <Flex align="center" gap="20px">
              <Icon as={FaCheckCircle} />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </Flex>
          </List.Item>
          <List.Item>
            <Flex align="center" gap="20px">
              <Icon as={FaTimesCircle} />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae, animi.
            </Flex>
          </List.Item>
        </List.Root>
      </Tabs.Content>
    </Tabs.Root>
  );
}

export default Profile;
