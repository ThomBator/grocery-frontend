import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import user from "@testing-library/user-event";
import axios from "axios";
import { server } from "../mocks/server";
import { rest } from "msw";

import GroceryList from "../pages/GroceryList";

describe("GroceryList component tests", () => {
  vi.mock("axios");

  beforeEach(() => {
    vi.clearAllMocks();
  });

  //Success case
  test("component should render with input and button", () => {
    render(<GroceryList />);

    const input = screen.getByRole("textbox");
    const button = screen.getByTestId("addButton");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  //Success case
  test("List of existing database items should appear when component renders", async () => {
    render(<GroceryList />);

    waitFor(() => expect(screen.getByText(/milk/i)).toBeInTheDocument());

    waitFor(() => expect(screen.getByText(/coffee/i)).toBeInTheDocument());
  });

  //Error case
  test("displays an error when the API call fails", async () => {
    vi.spyOn(global.console, "error").mockImplementation(() => {});
    server.use(
      rest.get("http://localhost:5000/api/items", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    waitFor(() =>
      expect(console.error).toHaveBeenCalledWith("Error fetching items")
    );
  });

  test("displays a spinner while fetching items", async () => {
    render(<GroceryList />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  //Loading case
  test("spinner goes away after data is fetched", async () => {
    render(<GroceryList />);
    waitFor(() => {
      expect(screen.getByTestId("spinner")).not.toBeInTheDocument();
    });
  });

  //Integration test
  test("User can input a new item and add to list", () => {
    render(<GroceryList />);
    const input = screen.getByRole("textbox");
    const button = screen.getByTestId("addButton");

    user.click(input);
    user.keyboard("Apples");
    user.click(button);

    waitFor(() => expect(screen.getByText(/apples/i)).toBeInTheDocument());
  });
});
