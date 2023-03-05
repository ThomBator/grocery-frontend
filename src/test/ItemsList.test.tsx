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

test("Component should render with list with two mock elements", () => {
  const mockFunction = vi.fn();
  render(
    <ItemsList
      items={mockItems}
      deleteItem={mockFunction}
      updateItem={mockFunction}
    />
  );
  screen.logTestingPlaygroundURL();
  const list = screen.getAllByRole("list");
  expect(list).toHaveLength(1);
  const milk = screen.getByDisplayValue(/milk/i);
  const coffee = screen.getByDisplayValue(/coffee/i);

  expect(milk).toBeInTheDocument();
  expect(coffee).toBeInTheDocument();
});
