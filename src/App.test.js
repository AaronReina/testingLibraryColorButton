import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelwithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();
  const checKBox = screen.getByRole("checkbox", { name: "Disable Button" });
  expect(checKBox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
  fireEvent.click(checKBox);
  expect(colorButton).toBeDisabled();
  fireEvent.click(checKBox);
  expect(colorButton).toBeEnabled();
});

test("disable button", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checKBox = screen.getByRole("checkbox", { name: "Disable Button" });
  fireEvent.click(checKBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checKBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MediumVioletRed" });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
  fireEvent.click(checKBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checKBox);
  expect(colorButton).toHaveStyle({ backgroundColor: "MidnightBlue" });
});

describe("test function replaceCamelwithSpaces", () => {
  test("no capitals", () => {
    expect(replaceCamelwithSpaces("red")).toBe("red");
  });

  test("1 capitals", () => {
    expect(replaceCamelwithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });

  test("multiple capitals", () => {
    expect(replaceCamelwithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
