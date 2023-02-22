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
        bgGradient="linear(to-b, green.500, green.700)"
        color="white"
        p={{ base: "20px", lg: "30px" }}
        minH={{ base: "2rem", lg: "100vh" }}
      >
        <Navigation height="100%" />
      </GridItem>
      <GridItem as="main" colSpan={{ base: 6, lg: 5 }}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default MainLayout;
