import SummaryPage from "pages/SummaryPage";
import { render, screen } from "test-utils";

test("testing order data display", () => {
  render(<SummaryPage />);
  expect(screen.getByText(/ul\.platynowa 16e/i)).toBeInTheDocument();
  expect(screen.getByText(/4x burger wołowy z bekonem/i)).toBeInTheDocument();
  expect(screen.getByText(/4x 32\.99 zł/i)).toBeInTheDocument();
  expect(screen.getByText(/131\.96 zł/i)).toBeInTheDocument();
});
