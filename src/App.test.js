import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Fetch from "./fetch";

test("loads and displays greeting", async () => {
  render(<Fetch url="/greeting" />);

  await userEvent.click(screen.getByText("Load Greeting"));
  await screen.findByRole("heading");

  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});
