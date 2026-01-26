import { List, ListItem, Icon, Flex, Text } from "@chakra-ui/react";
import { FaAt, FaCalendarAlt, FaEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <Flex direction="column" p={6} color="white">
      <List.Root fontSize="1.2em" unstyled spaceY="20px">
        <List.Item>
          <NavLink to="/" style={{ display: "block" }}>
            <Flex align="center">
              <Icon as={FaCalendarAlt} mr={3} />
              <Text>Dashboard</Text>
            </Flex>
          </NavLink>
        </List.Item>

        <List.Item>
          <NavLink to="/create" style={{ display: "block" }}>
            <Flex align="center">
              <Icon as={FaEdit} mr={3} />
              <Text>Create</Text>
            </Flex>
          </NavLink>
        </List.Item>

        <List.Item>
          <NavLink to="/profile" style={{ display: "block" }}>
            <Flex align="center">
              <Icon as={FaAt} mr={3} />
              <Text>Profile</Text>
            </Flex>
          </NavLink>
        </List.Item>
      </List.Root>
    </Flex>
  );
}

export default Sidebar;
