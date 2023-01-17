import ContentContainer from "layout/ContentContainer";
import Button from "components/Button";
import ProductsList from "./ProductsList";
import SearchBar from "./SearchBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const MenuSection = () => {
  return (
    <div id="menu" className="h-auto bg-primary-white pb-20">
      <ContentContainer>
        <SearchBar />
        <ProductsList />
        <div className="flex justify-center pt-12">
          <Button href="/order">
            Zamawiam
            <FontAwesomeIcon
              className="pl-2 text-white"
              icon={faCartShopping}
            />
          </Button>
        </div>
      </ContentContainer>
    </div>
  );
};
export default MenuSection;
