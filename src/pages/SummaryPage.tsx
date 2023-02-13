import { useCart } from "components/context/CartService";
import Button from "components/Button";
import SummarySection from "components/Summary/SummarySection";
import ContentContainer from "layout/ContentContainer";
import PageWrapper from "layout/PageWrapper";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const defaultOrder = {
  apartment_number: "",
  city: "",
  comment: "",
  email: "",
  first_name: "",
  floor: "",
  house_number: "",
  order: [],
  phone_number: "",
  postcode: "",
  street: "",
  surname: "",
};

const SummaryPage = () => {
  const { orderItems, setCartItems, setOrderItems } = useCart();

  const navigate = useNavigate();

  const handleSubmit = () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderItems),
      };
      fetch("http://localhost:3000/orders", requestOptions)
        .then(() => navigate("/"))
        .then(() => {
          setCartItems([]);
          setOrderItems(defaultOrder);
        })
        .then(() =>
          toast.success("Zamówienie zostało przekazane do realizacji!")
        );
    } catch (error) {
      console.error(error);
      toast.error("Wystąpił błąd");
    }
  };

  return (
    <PageWrapper>
      <div className="h-screen bg-primary-white">
        <ContentContainer className="flex flex-wrap items-center">
          <div className="h-5/6 w-full pt-2">
            <SummarySection />
            <div className="flex flex-col justify-around items-center h-24 lg:h-1/6 w-full">
              <div>
                <button
                  type="submit"
                  className="bg-secondary-pink py-2 px-10 text-white text-xl 3xl:text-2xl 3xl:text-3xl rounded-2xl"
                  onClick={handleSubmit}
                >
                  Zamawiam
                </button>
              </div>
              <div>
                <Button href="/order" cancel>
                  Anuluj
                </Button>
              </div>
            </div>
          </div>
        </ContentContainer>
      </div>
    </PageWrapper>
  );
};
export default SummaryPage;
