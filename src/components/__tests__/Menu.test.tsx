import { render, screen } from "@testing-library/react";
import MenuSection from "components/Menu/MenuSection";
import ProductsList from "components/Menu/ProductsList";

const testAlt = "soczysty burger wołowy z frytkami";

const data = [
  {
    id: 1,
    name: "Burger wołowy z bekonem",
    price: 32.99,
    img: "assets/hero-img.jpeg",
    alt: testAlt,
  },
  {
    id: 2,
    name: "Burger z kurczakiem",
    price: 30.99,
    img: "assets/hero-img.jpeg",
    alt: testAlt,
  },
  {
    id: 3,
    name: "Burger wołowy na ostro",
    price: 35.99,
    img: "assets/hero-img.jpeg",
    alt: testAlt,
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
// const mockedFetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(menu),
//   })
// ) as jest.Mock;

// global.fetch = mockedFetch;

// console.log(mockedFetch);

test("should render fetched data", async () => {
  render(<ProductsList />);
  // await screen.findByText("Burger wołowy z bekonem");
  // await expect(fetch).toHaveBeenCalledTimes(1);
  expect(
    await screen.findAllByAltText("soczysty burger wołowy z frytkami")
  ).toHaveLength(3);
});

test("should navigate to order page", () => {
  const { getByText } = render(<MenuSection />);
  expect(getByText("Zamawiam").closest("a")).toHaveAttribute("href", "/order");
});