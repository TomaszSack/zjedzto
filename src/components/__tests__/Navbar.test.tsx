import { fireEvent, render, screen } from "test-utils";
import Navbar from "components/Navbar";

test("should link to main page", () => {
  render(<Navbar />);
  const link = screen.getByRole("img", {
    name: /zjedzto logo/i,
  });
  expect(link.closest("a")).toHaveAttribute("href", "/");
});

test("is dropdown menu showing on hover", () => {
  render(<Navbar />);

  const cart = screen.queryByTestId("cart");

  expect(cart).not.toBeInTheDocument();
  fireEvent.mouseOver(screen.getByTestId("cart-icon"));
  expect(cart).toBeInTheDocument();
});
