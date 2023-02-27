import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

function MainLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <GridItem
        as="nav"
        colSpan={{ base: 6, lg: 1 }}
        bg="green.500"
        color="white"
        p={{ base: "20px", lg: "30px" }}
        minH={{ base: "2rem", lg: "100vh" }}
      >
        <Navigation />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 5 }}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default MainLayout;
