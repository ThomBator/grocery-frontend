import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import ItemsList from "../components/ItemsList";

const mockItems = [
  {
    id: 1,
    created_at: "2023-03-04 01:43:30.489451+00",
    description: "Milk",
  },
  {
    id: 2,
    created_at: "2023-03-04 01:55:30.489451+00",
    description: "Coffee",
  },
];

test("Component should render with list", () => {
  const mockFunction = vi.fn();
  render(
    <ItemsList
      items={mockItems}
      deleteItem={mockFunction}
      updateItem={mockFunction}
    />
  );

  const listItems = screen.getAllByRole("list");
  expect(listItems).toHaveLength(1);
});
