import { render } from "@testing-library/react";
import Navbar from "components/Navbar";

test("should navigate to main page", () => {
  const { getByRole } = render(<Navbar />);
  expect(getByRole("link")).toHaveAttribute("href", "/");
});
