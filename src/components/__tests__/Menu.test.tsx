import { render } from "@testing-library/react";
import ProductsList from "components/Menu/ProductsList";

test("renders component", async () => {
  const { getAllByTestId } = render(<ProductsList />);
  expect(getAllByTestId("products")).toHaveLength(4);
});