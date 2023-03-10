import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import user from "@testing-library/user-event";
import axios from "axios";

import GroceryList from "../pages/GroceryList";

vi.mock("axios");

test("component should render with input and button", () => {
  render(<GroceryList />);

  const input = screen.getByRole("textbox");
  const button = screen.getByTestId("addButton");

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("List of existing database items should appear when component renders", async () => {
  render(<GroceryList />);
  waitFor(() => expect(screen.getByText(/milk/i)).toBeInTheDocument());

  waitFor(() => expect(screen.getByText(/coffee/i)).toBeInTheDocument());
});
