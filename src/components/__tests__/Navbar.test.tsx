import { render, screen } from 'test-utils';
import Navbar from "components/Navbar";

test("should link to main page", () => {
  render(<Navbar />);
  const link = screen.getByRole("img", {
    name: /zjedzto logo/i,
  });
  expect(link.closest('a')).toHaveAttribute("href", "/");
});
