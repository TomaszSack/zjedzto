import logo from "../assets/logo-wbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ContentContainer from "../layout/ContentContainer";

const Navbar = () => {
  return (
    <div className="fixed h-20 w-full flex justify-center bg-white shadow-nav">
      <ContentContainer className="flex items-center justify-between">
        <a href="/" className="h-4/6">
          <img src={logo} className="h-full" />
        </a>
        <div className="text-4xl">
          <span className="font-bold">Zjedz</span>To
        </div>
        <div className="flex items-center h-2/6">
          <FontAwesomeIcon
            className="h-full text-primary-pink"
            icon={faCartShopping}
          />
          <div className="h-6 w-6 bg-secondary-pink rounded-full text-white text-center">1</div>
        </div>
      </ContentContainer>
    </div>
  );
};
export default Navbar;
