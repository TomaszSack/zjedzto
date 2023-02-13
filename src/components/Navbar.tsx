import logo from "assets/logo-wbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faReceipt } from "@fortawesome/free-solid-svg-icons";
import ContentContainer from "layout/ContentContainer";
import { useCart } from "./context/CartService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cart from "./Order/Cart";

const Navbar = () => {
  const { cartQuantity } = useCart();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="fixed h-16 3xl:h-20 w-full bg-white shadow-nav z-10">
      <ContentContainer className="flex items-center lg:justify-between px-4">
        <a href="/" className="h-4/6 transition-all hover:scale-125">
          <img src={logo} className="h-full" alt="ZjedzTo logo" />
        </a>
        <div className="text-3xl lg:text-4xl">
          <span className="font-bold">Zjedz</span>To
        </div>
        <div className="flex items-center h-2/6 ml-auto lg:ml-0">
          <FontAwesomeIcon
            onClick={() => navigate("/orders-summary")}
            className="h-full text-primary-pink h-8 mr-4 lg:mr-8 cursor-pointer transition-all hover:scale-125"
            icon={faReceipt}
          />
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
        </div>
      </ContentContainer>
    </div>
  );
};
export default Navbar;
