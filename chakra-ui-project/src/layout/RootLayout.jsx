import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Toaster } from "../components/ui/toaster";

function RootLayout() {
  return (
    <>
      <Toaster />
      {/* This enables the toast system in your app */}
      <Grid templateColumns="repeat(6,1fr)" bg="gray.50" minH="100vh">
        <GridItem
          as="aside"
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          bg="purple.400"
          minHeight={{ lg: "100vh" }}
          padding={{ base: "20px", lg: "30px" }}
        >
          <Sidebar />
        </GridItem>

        <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} padding="40px">
          <Navbar />

          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
}

export default RootLayout;
