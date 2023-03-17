import { DeleteIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import ItemObject from "../types";

interface itemProps {
  item: ItemObject;
  deleteItem: (item: ItemObject) => void;
  updateItem: (description: string, item: ItemObject) => void;
}

function Item({ item, deleteItem, updateItem }: itemProps) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
    console.log(checked);
  };

  const handleUpdate = (description: string) => {
    updateItem(description, item);
  };
  const handleDelete = () => {
    deleteItem(item);
  };

  return (
    <HStack mb="1rem" spacing=".75rem" justify="flex-start">
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
          pl="1rem"
          color="gray.800"
          textDecoration={checked ? "line-through" : "none"}
          width={{ base: "200px", md: "300px" }}
        />

        <EditableInput width={{ base: "200px", md: "300px" }} />
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
