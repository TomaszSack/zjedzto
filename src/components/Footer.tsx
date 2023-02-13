import ContentContainer from "layout/ContentContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-primary-gray">
      <ContentContainer className="text-white text-2xl lg:text-4xl py-2 px-4 lg:py-3 lg:px-0 flex justify-between">
        <div className="text-white space-x-4">
          <FontAwesomeIcon
            className="hover:scale-125 transition-all"
            icon={faFacebookSquare}
          />
          <FontAwesomeIcon
            className="hover:scale-125 transition-all"
            icon={faInstagram}
          />
          <FontAwesomeIcon
            className="hover:scale-125 transition-all"
            icon={faSquareTwitter}
          />
        </div>
        <div>
          <span className="font-bold">Zjedz</span>To
        </div>
      </ContentContainer>
    </div>
  );
};
export default Footer;
