import logo from "assets/logo-wbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ContentContainer from "layout/ContentContainer";
import { useCart } from "./context/CartService";
import { useState } from "react";
import OrderSection from "./Order/OrderSection";
import OrderItem from "./Order/OrderItem";
import Cart from "./Order/Cart";

const Navbar = () => {
  const { cartQuantity, cartItems, cartAmount } = useCart();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  console.log(menuIsOpen);

  return (
    <div className="fixed h-16 3xl:h-20 w-full bg-white shadow-nav z-10">
      <ContentContainer className="flex items-center justify-between">
        <a href="/" className="h-4/6">
          <img src={logo} className="h-full" alt="ZjedzTo logo" />
        </a>
        <div className="text-4xl">
          <span className="font-bold">Zjedz</span>To
        </div>
        <div
          className="relative flex items-center h-2/6"
          onMouseEnter={() => setMenuIsOpen(true)}
          onMouseLeave={() => setMenuIsOpen(false)}
        >
          <FontAwesomeIcon
            className="h-full text-primary-pink"
            icon={faCartShopping}
          />
          <div className="h-6 w-6 bg-secondary-pink rounded-full text-white text-center">
            {cartQuantity}
          </div>
          {menuIsOpen && (
            <div
              className="absolute w-80 h-80 top-full left-minus36"
              onMouseEnter={() => setMenuIsOpen(true)}
              onMouseLeave={() => setMenuIsOpen(false)}
            >
              <Cart small />
            </div>
          )}
        </div>
      </ContentContainer>
    </div>
  );
};
export default Navbar;
