import { render } from "@testing-library/react";
import Hero from "components/Hero";

test("should navigate to menu section", async () => {
  const { getByText } = render(<Hero />);
  expect(getByText("Sprawdź menu").closest("a")).toHaveAttribute(
    "href",
    "#menu"
  );
});
