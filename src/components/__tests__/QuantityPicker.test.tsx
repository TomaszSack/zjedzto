import { render, screen, fireEvent } from "test-utils";
import Cart from "components/Order/Cart";

type TestElement = Document | Element | Window | Node;

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

test("should increment initialValue", async () => {
  render(<Cart />);

  fireEvent.click(screen.getByTitle("plus"));
  fireEvent.click(screen.getByTitle("plus"));

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "6")).toBe(true);
});

test("should decrement initialValue", async () => {
  render(<Cart />);

  fireEvent.click(screen.getByTitle("minus"));
  fireEvent.click(screen.getByTitle("minus"));

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "2")).toBe(true);
});

test("should not exceed max value", async () => {
  render(<Cart />);

  for (let i = 0; i < 10; i++) {
    fireEvent.click(screen.getByTitle("plus"));
  }

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "9")).toBe(true);
  expect(screen.getByTitle("plus").closest("button")).toHaveClass(
    "mod-disable"
  );
});
