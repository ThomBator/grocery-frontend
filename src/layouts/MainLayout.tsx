import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Flex, Box } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

function MainLayout() {
  return (
    <Flex direction="column">
      <Box
        as="nav"
        bg="green.500"
        color="white"
        p="20px"
        width={{ base: "100%", lg: "auto" }}
      >
        <Navigation />
      </Box>
      <Outlet />
    </Flex>
  );
}

export default MainLayout;
