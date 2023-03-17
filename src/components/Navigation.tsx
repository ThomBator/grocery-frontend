import {
  AtSignIcon,
  EditIcon,
  LockIcon,
  ArrowLeftIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
//<a href="https://www.flaticon.com/free-icons/paper-bag" title="paper bag icons">Paper bag icons created by Freepik - Flaticon</a>
function Navigation() {
  return (
    <Flex flexDirection="column" alignItems="center" minH="100%">
      <Flex alignItems="flex-end" gap="-0.5rem">
        <Image boxSize="3rem" src="images/paper-bag.png" />

        <Text
          as="h1"
          fontFamily="Monospace"
          fontSize="1.5rem"
          fontWeight="semibold"
        >
          GoGros
        </Text>
      </Flex>
    </Flex>
  );
}

export default Navigation;
