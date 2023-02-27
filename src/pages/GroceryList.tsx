import React, { useState, useEffect } from "react";
import { Heading, VStack, Card, Container } from "@chakra-ui/react";

import AddItem from "../components/AddItem";
import ItemsList from "../components/ItemsList";
import axios from "axios";
import ItemObject from "../types";

function GroceryList() {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    axios
      .get("http://localhost:5000/api/items")
      .then((res) => {
        setList(res.data);
      })
      .catch((err) => {
        console.error("Error fetching items");
      });
  };

  const updateItem = async (description: string, item: ItemObject) => {
    console.log;
    axios
      .put(`http://localhost:5000/api/items/${item.id}`, { description })
      .then((res) => {
        if (res.data) {
          fetchList();
        } else {
          console.error("Error updating item");
        }
      });
  };

  const deleteItem = async (item: ItemObject) => {
    console.log(item);
    axios.delete(`http://localhost:5000/api/items/${item.id}`).then((res) => {
      if (res.data) {
        fetchList();
      } else {
        console.error("error deleting item");
      }
    });
  };

  const deleteAll = async () => {
    axios.delete("http://localhost:5000/api/items").then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    deleteAll();
  }, []);

  return (
    <Container maxW="36rem">
      <Card
        mt="2rem"
        bg="whitesmoke"
        p="1rem"
        borderRadius="2xl"
        minHeight="80vh"
        borderTop="8px"
        borderBottom="8px"
        borderColor="green.500"
        shadow="dark-lg"
        mb="5rem"
      >
        <VStack spacing="2rem">
          <Heading
            color="green.500"
            textAlign="center"
            fontFamily="Monospace"
            size="md"
            fontWeight="semibold"
          >
            Grocery List
          </Heading>
          <AddItem fetchList={fetchList} />

          <ItemsList
            items={list}
            deleteItem={deleteItem}
            updateItem={updateItem}
          />
        </VStack>
      </Card>
    </Container>
  );
}

export default GroceryList;
