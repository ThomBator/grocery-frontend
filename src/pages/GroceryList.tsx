import React, { useState, useEffect } from "react";
import { Heading, VStack, Card, Container, Spinner } from "@chakra-ui/react";

import AddItem from "../components/AddItem";
import ItemsList from "../components/ItemsList";
import axios from "axios";
import ItemObject from "../types";

const URL = process.env.VITE_URL;

function GroceryList() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      axios
        .get(`${URL}`)

        .then((res) => {
          setList(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching items", err);
          setLoading(false);
        });
    } catch (err) {
      console.error(err);
    }
  };

  const updateItem = async (description: string, item: ItemObject) => {
    try {
      axios.put(`${URL}${item.id}`, { description }).then((res) => {
        if (res.data) {
          fetchList();
        } else {
          console.error("Error updating item");
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteItem = async (item: ItemObject) => {
    try {
      axios.delete(`${URL}${item.id}`).then((res) => {
        if (res.data) {
          fetchList();
        } else {
          console.error("error deleting item");
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const deleteAll = async () => {
    try {
      axios.delete(`${URL}`).then((res) => {
        console.log(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchList();
    //will add deleteAll() function call here when pushing to production
    //This will control the content in the list
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

          {loading ? (
            <Spinner data-testid="spinner" />
          ) : (
            <ItemsList
              items={list}
              deleteItem={deleteItem}
              updateItem={updateItem}
            />
          )}
        </VStack>
      </Card>
    </Container>
  );
}

export default GroceryList;
