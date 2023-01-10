import { render } from "@testing-library/react";
import Navbar from "components/Navbar";

test("should navigate to main page", async () => {
  const { getByAltText } = render(<Navbar />);
  expect(getByAltText("ZjedzTo logo").closest("a")).toHaveAttribute(
    "href",
    "/"
  );
});
