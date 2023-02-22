import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import supabase from "../config/supabase-client";

function Item({ item, deleteItem, updateItem }) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    console.log(checked);
  };

  const handleUpdate = (description) => {
    updateItem(description, item);
  };
  const handleDelete = () => {
    deleteItem(item);
  };

  return (
    <HStack mb="1rem" spacing=".75rem">
      <Checkbox
        colorScheme="green"
        isChecked={checked}
        onChange={handleCheck}
      />

      <Editable
        defaultValue={item.description}
        onSubmit={(description) => handleUpdate(description)}
      >
        <EditablePreview
          borderBottom="2px"
          borderStyle="dotted"
          borderColor="gray.200"
          width="300px"
          pl="1rem"
          color="gray.800"
          textDecoration={checked ? "line-through" : "none"}
        />

        <EditableInput width="300px" />
      </Editable>

      <IconButton
        onClick={handleDelete}
        aria-label="Delete list item"
        icon={<DeleteIcon />}
      />
    </HStack>
  );
}

export default Item;
