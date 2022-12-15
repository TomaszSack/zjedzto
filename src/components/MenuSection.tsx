import ContentContainer from "../layout/ContentContainer";
import Menu from "./Menu";
import SearchBar from "./SearchBar";

const MenuSection = () => {
  return (
    <div id="menu" className="h-screen bg-primary-white">
      <ContentContainer>
        <SearchBar />
        <Menu />
      </ContentContainer>
    </div>
  );
};
export default MenuSection;
