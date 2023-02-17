import { render, screen } from "test-utils";
import MenuSection from "components/Menu/MenuSection";
import ProductsList from "components/Menu/ProductsList";

const data = [
  "soczysty burger wołowy z frytkami",
  "soczysty burger z kurczakiem",
  "soczysty burger wołowy na ostro",
];

test("should render fetched data", async () => {
  render(<ProductsList />);
  for (let i = 0; i < data.length; i++) {
    const burgerItem = await screen.findByAltText(data[i]);
    expect(burgerItem).toBeInTheDocument;
  }
});

test("should link to order page", () => {
  const { getByText } = render(<MenuSection />);
  expect(getByText("Zamawiam").closest("a")).toHaveAttribute("href", "/order");
});