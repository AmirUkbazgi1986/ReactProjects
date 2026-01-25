import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)" bg="gray.50">
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="purple.400"
        minHeight={{ lg: "100vh" }}
        padding={{ base: "20px", lg: "30px" }}
      >
        <span>SideBar</span>
      </GridItem>

      <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} padding="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default RootLayout;
