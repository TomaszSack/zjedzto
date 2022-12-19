import Footer from "components/Footer";
import Navbar from "components/Navbar";

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default PageWrapper;
