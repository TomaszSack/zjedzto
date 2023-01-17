import Hero from "components/Hero";
import MenuSection from "components/Menu/MenuSection";
import PageWrapper from "layout/PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      <Hero />
      <MenuSection />
    </PageWrapper>
  );
};
export default Home;
