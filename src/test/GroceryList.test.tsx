import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import user from "@testing-library/user-event";
import GroceryList from "../pages/GroceryList";

test("should render with input and button", () => {
  render(<GroceryList />);

  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
