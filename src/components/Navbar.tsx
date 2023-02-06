import logo from "assets/logo-wbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faReceipt } from "@fortawesome/free-solid-svg-icons";
import ContentContainer from "layout/ContentContainer";
import { useCart } from "./context/CartService";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cartQuantity } = useCart();
  const navigate = useNavigate()
  return (
    <div className="fixed h-16 3xl:h-20 w-full bg-white shadow-nav z-10">
      <ContentContainer className="flex items-center justify-between">
        <a href="/" className="h-4/6">
          <img src={logo} className="h-full" alt="ZjedzTo logo" />
        </a>
        <div className="text-4xl">
          <span className="font-bold">Zjedz</span>To
        </div>
        <div className="flex items-center h-2/6">
          <FontAwesomeIcon
            onClick={() => navigate("orders-summary")}
            className="h-full text-primary-pink h-8 mr-8 cursor-pointer"
            icon={faReceipt}
          />
          <FontAwesomeIcon
            className="h-full text-primary-pink"
            icon={faCartShopping}
          />
          <div className="h-6 w-6 bg-secondary-pink rounded-full text-white text-center">
            {cartQuantity}
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};
export default Navbar;
