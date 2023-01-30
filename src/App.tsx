import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderPage from "pages/OrderPage";
import { CartProvider } from "components/context/CartService";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
