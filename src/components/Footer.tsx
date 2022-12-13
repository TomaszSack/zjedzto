import ContentContainer from "../layout/ContentContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faSquareTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-primary-gray">
      <ContentContainer className="text-white text-4xl py-3 flex justify-between">
        <div className="text-white space-x-4">
          <FontAwesomeIcon icon={faFacebookSquare} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faSquareTwitter} />
        </div>
        <div>
          <span className="font-bold">Zjedz</span>To
        </div>
      </ContentContainer>
    </div>
  );
};
export default Footer;
