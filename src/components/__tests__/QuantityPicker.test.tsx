import { render, screen, fireEvent } from "@testing-library/react";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";

type TestElement = Document | Element | Window | Node;

function hasInputValue(e: TestElement, inputValue: string) {
  return screen.getByDisplayValue(inputValue) === e;
}

test("should increment initialValuew", async () => {
  render(<QuantityPicker initialValue={4} min={0} max={9} />);

  fireEvent.click(screen.getByTitle("plus"));
  fireEvent.click(screen.getByTitle("plus"));

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "6")).toBe(true);
});

test("should decrement initialValue", async () => {
  render(<QuantityPicker initialValue={4} min={0} max={9} />);

  fireEvent.click(screen.getByTitle("minus"));
  fireEvent.click(screen.getByTitle("minus"));

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "2")).toBe(true);
});

test("should not exceed max value", async () => {
  render(<QuantityPicker initialValue={4} min={0} max={9} />);

  for (let i = 0; i < 10; i++) {
    fireEvent.click(screen.getByTitle("plus"));
  }

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "9")).toBe(true);
});

test("should not exceed min value", async () => {
  render(<QuantityPicker initialValue={4} min={0} max={9} />);

  for (let i = 0; i < 10; i++) {
    fireEvent.click(screen.getByTitle("minus"));
  }

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "0")).toBe(true);
});
