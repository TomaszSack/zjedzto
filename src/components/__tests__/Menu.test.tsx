import { render, screen } from "@testing-library/react";
import MenuSection from "components/Menu/MenuSection";
import ProductsList from "components/Menu/ProductsList";

const data = [
  {
    id: 1,
    name: "Burger wołowy z bekonem",
    price: 32.99,
    img: "assets/hero-img.jpeg",
    alt: "soczysty burger wołowy",
  },
  {
    id: 2,
    name: "Burger z kurczakiem",
    price: 30.99,
    img: "assets/hero-img.jpeg",
    alt: "soczysty burger z kurczaka",
  },
  {
    id: 3,
    name: "Burger wołowy na ostro",
    price: 35.99,
    img: "assets/hero-img.jpeg",
    alt: "soczysty burger wołowy na ostro",
  },
];

beforeEach(() => {
  jest.restoreAllMocks();
  jest.spyOn(global, "fetch").mockImplementation(
    jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    ) as jest.Mock
  );
});


test("should render fetched data", async () => {
  await render(<ProductsList />);
  for (let i = 0; i < data.length; i++) {
    await expect(await screen.findByAltText(data[i].alt)).toBeInTheDocument;
  }
});

test("should link to order page", () => {

  const { getByText } = render(<MenuSection />);
  expect(getByText("Zamawiam").closest("a")).toHaveAttribute("href", "/order");
});
