import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import user from "@testing-library/user-event";
import AddItem from "../components/AddItem";
import { server } from "../mocks/server";
import { rest } from "msw";

describe("AddItem test cases", () => {
  //Success case
  test("Component renders form with input and submit button", () => {
    const mockFunction = vi.fn();
    render(<AddItem fetchList={mockFunction} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  //Success case
  test("should add item on form submit", async () => {
    const mockFunction = vi.fn();
    render(<AddItem fetchList={mockFunction} />);
    const input = screen.getByPlaceholderText("Add an item...");
    const addButton = screen.getByTestId("addButton");

    // Type a description and click the Add button
    fireEvent.change(input, { target: { value: "New item" } });
    fireEvent.click(addButton);

    // Wait for the form submission to complete
    await waitFor(() => expect(mockFunction).toHaveBeenCalledTimes(1));
    expect(input).toHaveValue("");
  });

  //Success case
  test("After new input is submitted, input field is cleared", async () => {
    const mockFunction = vi.fn();
    render(<AddItem fetchList={mockFunction} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    user.click(input);
    user.keyboard("Apples");
    user.click(button);
    const newInput = await screen.findByRole("textbox");
    expect(newInput).toHaveValue("");
  });

  //Error case
  test("displays an error when the API call fails", async () => {
    vi.spyOn(global.console, "error").mockImplementation(() => {});
    server.use(
      rest.post("http://localhost:5000/api/items", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    waitFor(() =>
      expect(console.error).toHaveBeenCalledWith("Insert item failed")
    );
  });

  //Error case
  test("should not add item on form submit if description is empty", async () => {
    const mockFunction = vi.fn();
    render(<AddItem fetchList={mockFunction} />);
    const input = screen.getByPlaceholderText("Add an item...");
    const addButton = screen.getByTestId("addButton");

    // Click the Add button without typing anything
    fireEvent.click(addButton);

    // Wait for the form submission to complete
    await waitFor(() => expect(mockFunction).toHaveBeenCalledTimes(0));
    expect(input).toHaveValue("");
  });
});
