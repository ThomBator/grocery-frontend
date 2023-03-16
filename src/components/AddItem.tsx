import React, { FormEvent, useState } from "react";
import { FormControl, HStack, Input, Button, Alert } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import axios from "axios";

interface addItemProps {
  fetchList: () => void;
}

export default function AddItem({ fetchList }: addItemProps) {
  const URL = import.meta.env.VITE_URL;
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const description = inputValue.trim();

    if (!description) {
      return;
    } else {
      axios.post(URL, { description }).then((res) => {
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
        <HStack>
          <Input
            type="text"
            placeholder="Add an item..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            width="300px"
            maxLength={25}
          />
          <Button data-testid="addButton" type="submit" colorScheme="green">
            Add
          </Button>
        </HStack>
      </FormControl>
    </form>
  );
}
