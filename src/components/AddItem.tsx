import React, { useState } from "react";
import { FormControl, HStack, Input, Button, Alert } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import axios from "axios";

function AddItem({ submitHandler }) {
  const [inputValue, setInputValue] = useState("");

  const insertData = async (event) => {
    const description = inputValue.trim();

    if (!description) {
      return;
    } else {
      axios
        .post("http://localhost:5000/api/items", { description })
        .then((res) => {
          if (res.data) {
            submitHandler();
            setInputValue("");
          } else {
            console.error("Insert item failed");
          }
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    insertData(event);
  };
  return (
    <Form onSubmit={handleSubmit}>
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
    </Form>
  );
}

export default AddItem;
