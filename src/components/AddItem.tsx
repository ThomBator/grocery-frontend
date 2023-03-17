import React, { FormEvent, useState } from "react";
import {
  FormControl,
  HStack,
  Input,
  Button,
  Alert,
  Flex,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import axios from "axios";

interface addItemProps {
  fetchList: () => void;
}

export default function AddItem({ fetchList }: addItemProps) {
  const URL =
    "https://grocery-backend-production-4ecf.up.railway.app/api/items/";
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const description = inputValue.trim();

    if (!description) {
      return;
    } else {
      axios.post(`${URL}`, { description }).then((res) => {
        if (res.data) {
          fetchList();
          setInputValue("");
        } else {
          console.error("Insert item failed");
        }
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          gap="2"
        >
          <Input
            type="text"
            placeholder="Add an item..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            width="300px"
            maxLength={25}
          />
          <Button
            maxW="100px"
            data-testid="addButton"
            type="submit"
            colorScheme="green"
          >
            Add
          </Button>
        </Flex>
      </FormControl>
    </form>
  );
}
