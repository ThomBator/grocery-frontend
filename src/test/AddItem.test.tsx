import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import user from "@testing-library/user-event";
import AddItem from "../components/AddItem";

test("Component renders form with input and submit button", () => {
  const mockFunction = vi.fn();
  render(<AddItem fetchList={mockFunction} />);

  const input = screen.getByRole("textbox");
  const button = screen.getByRole("button");

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

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
