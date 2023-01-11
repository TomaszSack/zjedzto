import { render } from "@testing-library/react";
import MenuSection from "components/Menu/MenuSection";
import ProductsList from "components/Menu/ProductsList";

test("should navigate to order page", () => {
  const { getByText } = render(<MenuSection />);
  expect(getByText("Zamawiam").closest("a")).toHaveAttribute(
    "href",
    "/order"
  );;
});