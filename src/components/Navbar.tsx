import logo from "../logo-wbg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="fixed h-20 w-full flex justify-center bg-white shadow-nav">
      <div className="h-full w-8/12 flex items-center justify-between">
        <a href="/" className="h-4/6">
          <img src={logo} className="h-full" />
        </a>
        <div className="text-4xl">
          <span className="font-bold">Zjedz</span>To
        </div>
        <FontAwesomeIcon
          className="h-2/6 text-primary-orange"
          icon={faCartShopping}
        />
      </div>
    </div>
  );
};
export default Navbar;
