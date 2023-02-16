import OrdersSummaryPage from "pages/OrdersSummaryPage";
import { render, screen } from "test-utils";

const prices = ["37.98 zł", "68.97 zł"];

test("should render orders summary items", async () => {
  await render(<OrdersSummaryPage />);

  for (let i = 0; i < prices.length; i++) {
    const orderItem = await screen.findByText(prices[i]);
    expect(orderItem).toBeInTheDocument;
  }
});
