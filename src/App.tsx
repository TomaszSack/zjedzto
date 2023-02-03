import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderPage from "pages/OrderPage";
import { CartProvider } from "components/context/CartService";
import SummaryPage from "pages/SummaryPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
        <Toaster
          position="top-left"
          containerClassName="m-32"
          toastOptions={{ duration: 5000, className:'text-center' }}
        />
      </CartProvider>
    </Router>
  );
}

export default App;
