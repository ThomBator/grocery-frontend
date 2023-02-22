import React from "react";
import Item from "./Item";
import { List, ListItem, Text } from "@chakra-ui/react";

function ItemsList({ items, deleteItem, updateItem }) {
  return (
    <>
      <List>
        {items &&
          items.map((item) => (
            <ListItem key={item.id}>
              <Item
                item={item}
                deleteItem={deleteItem}
                updateItem={updateItem}
              />
            </ListItem>
          ))}
      </List>
      <Text as="sub">(Click on items to edit)</Text>
    </>
  );
}

export default ItemsList;
