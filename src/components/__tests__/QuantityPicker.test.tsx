import { render, screen, fireEvent } from "@testing-library/react";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";

type TestElement = Document | Element | Window | Node;

test("should increment initialValue", async () => {
  render(<QuantityPicker initialValue={4} min={0} max={9} />);

  fireEvent.click(screen.getByText("+"));
  fireEvent.click(screen.getByText("+"));

  function hasInputValue(e: TestElement, inputValue: string) {
    return screen.getByDisplayValue(inputValue) === e;
  }

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "6")).toBe(true);
});

test("should decrement initialValue", async () => {
  render(<QuantityPicker initialValue={4} min={0} max={9} />);

  fireEvent.click(screen.getByText("-"));
  fireEvent.click(screen.getByText("-"));

  function hasInputValue(e: TestElement, inputValue: string) {
    return screen.getByDisplayValue(inputValue) === e;
  }

  const input = screen.getByRole("textbox");

  expect(hasInputValue(input, "2")).toBe(true);
});
