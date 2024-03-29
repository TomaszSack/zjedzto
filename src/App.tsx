import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderPage from "pages/OrderPage";
import { CartProvider } from "components/context/CartService";
import SummaryPage from "pages/SummaryPage";
import { Toaster } from "react-hot-toast";
import OrdersSummaryPage from "pages/OrdersSummaryPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/orders-summary" element={<OrdersSummaryPage />} />
        </Routes>
        <Toaster
          position="top-left"
          containerClassName="mt-16 lg:m-32"
          toastOptions={{ duration: 5000, className: "text-center" }}
        />
      </Router>
    </CartProvider>
  );
}

export default App;
