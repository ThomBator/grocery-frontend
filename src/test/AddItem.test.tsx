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
