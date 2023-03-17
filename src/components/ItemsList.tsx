import React from "react";
import Item from "./Item";
import { Box, List, ListItem, Text } from "@chakra-ui/react";
import ItemObject from "../types";
interface itemsListProps {
  items: ItemObject[];
  deleteItem: (item: ItemObject) => void;
  updateItem: (description: string, item: ItemObject) => void;
}

function ItemsList({ items, deleteItem, updateItem }: itemsListProps) {
  return (
    <>
      <List>
        {items &&
          items.map((item: ItemObject) => (
            <ListItem key={item.id}>
              <Item
                item={item}
                deleteItem={deleteItem}
                updateItem={updateItem}
              />
            </ListItem>
          ))}
      </List>

      <Box mt="0" textAlign="center">
        <p>*Database resets on every load for demo purposes. </p>
        <p>Click on items to edit.</p>
      </Box>
    </>
  );
}

export default ItemsList;
