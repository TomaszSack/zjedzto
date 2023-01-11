import { render } from "@testing-library/react";
import Hero from "components/Hero";

test("should navigate to menu section", () => {
  const { getByText, getByTestId } = render(<Hero />);
  expect(getByText("Sprawdź menu").closest("a")).toHaveAttribute(
    "href",
    "#menu"
  );
  expect(getByTestId("arrow-navigator")).toHaveAttribute("href", "#menu");
});
