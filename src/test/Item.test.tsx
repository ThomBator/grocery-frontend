import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import user from "@testing-library/user-event";
import Item from "../components/Item";

const mockItem = {
  id: 1,
  created_at: "2023-03-04 01:43:30.489451+00",
  description: "Milk",
};

describe("Suite of tests for Item.tsx component", () => {
  //First test that all elements render
  test("Item renders a checkbox, input and a button", () => {
    const mockFunction = vi.fn();
    render(
      <Item
        item={mockItem}
        deleteItem={mockFunction}
        updateItem={mockFunction}
      />
    );
    const checkbox = screen.getByRole("checkbox");
    const input = screen.getByRole("textbox", { hidden: true });
    const deleteButton = screen.getByRole("button", {
      name: /delete list item/i,
    });

    expect(checkbox).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });

  //Testing that default values are present
  test("Checkbox should be unchecked by default", () => {
    const mockFunction = vi.fn();
    render(
      <Item
        item={mockItem}
        deleteItem={mockFunction}
        updateItem={mockFunction}
      />
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  test("input default value should be Milk", () => {
    const mockFunction = vi.fn();
    render(
      <Item
        item={mockItem}
        deleteItem={mockFunction}
        updateItem={mockFunction}
      />
    );
    const input = screen.getByRole("textbox", { hidden: true });
    expect(input).toHaveValue("Milk");
  });

  test("input value should be changeable, updateItem should fire", async () => {
    const mockFunction = vi.fn();
    render(
      <Item
        item={mockItem}
        deleteItem={mockFunction}
        updateItem={mockFunction}
      />
    );
    const input = screen.getByRole("textbox", { hidden: true });
    screen.logTestingPlaygroundURL();
    user.click(input);
    user.keyboard("coffee");
    await fireEvent.keyPress(input, { key: "Enter", code: "Enter" });
  });
});
