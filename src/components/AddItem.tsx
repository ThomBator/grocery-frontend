import React, { FormEvent, useState } from "react";
import { FormControl, HStack, Input, Button, Alert } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import axios from "axios";

interface addItemProps {
  fetchList: () => void;
}

export default function AddItem({ fetchList }: addItemProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const description = inputValue.trim();

    if (!description) {
      return;
    } else {
      axios
        .post("http://localhost:5000/api/items", { description })
        .then((res) => {
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
          />
          <Button type="submit" colorScheme="green">
            Add
          </Button>
        </HStack>
      </FormControl>
    </form>
  );
}
