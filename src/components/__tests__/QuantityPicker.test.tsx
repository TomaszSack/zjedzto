import { render, screen, fireEvent } from "test-utils";
import Cart from "components/Order/Cart";

type TestElement = Document | Element | Window | Node;

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

test("should increment initialValue", () => {
  render(<Cart />);

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "4")).toBe(true);

  fireEvent.click(screen.getByTitle("plus"));
  fireEvent.click(screen.getByTitle("plus"));

  expect(hasInputValue(input, "6")).toBe(true);
});

test("should decrement initialValue", () => {
  render(<Cart />);

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "4")).toBe(true);

  fireEvent.click(screen.getByTitle("minus"));
  fireEvent.click(screen.getByTitle("minus"));

  expect(hasInputValue(input, "2")).toBe(true);
});

test("should not exceed max value", () => {
  render(<Cart />);
  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "4")).toBe(true);

  for (let i = 0; i < 10; i++) {
    fireEvent.click(screen.getByTitle("plus"));
  }

  expect(hasInputValue(input, "9")).toBe(true);
  expect(screen.getByTitle("plus").closest("button")).toHaveClass(
    "mod-disable"
  );
});

test("should delete order item", () => {
  render(<Cart />);

  expect(screen.getByText(/burger wołowy z bekonem/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole("img", { name: /delete/i }));

  expect(
    screen.queryByText(/burger wołowy z bekonem/i)
  ).not.toBeInTheDocument();
});
