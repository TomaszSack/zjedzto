import Footer from "components/Footer";
import Navbar from "components/Navbar";

const PageWrapper = ({ children }:any) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default PageWrapper;
