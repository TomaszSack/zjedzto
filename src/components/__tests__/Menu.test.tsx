import { render, screen } from "@testing-library/react";
import MenuSection from "components/Menu/MenuSection";
import ProductsList from "components/Menu/ProductsList";

const data = [
  {
    id: 1,
    name: "Burger wołowy z bekonem",
    price: 32.99,
    img: "assets/hero-img.jpeg",
    alt: "soczysty burger wołowy z frytkami",
  },
  {
    id: 2,
    name: "Burger z kurczakiem",
    price: 30.99,
    img: "assets/hero-img.jpeg",
    alt: "soczysty burger wołowy z frytkami",
  },
  {
    id: 3,
    name: "Burger wołowy na ostro",
    price: 35.99,
    img: "assets/hero-img.jpeg",
    alt: "soczysty burger wołowy z frytkami",
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
  expect(
    await screen.findAllByAltText("soczysty burger wołowy z frytkami")
  ).toHaveLength(3);
});

test("should navigate to order page", () => {
  const { getByText } = render(<MenuSection />);
  expect(getByText("Zamawiam").closest("a")).toHaveAttribute("href", "/order");
});
