import { useEffect } from "react";
import Button from "components/Button";
import SummarySection from "components/Summary/SummarySection";
import ContentContainer from "layout/ContentContainer";
import PageWrapper from "layout/PageWrapper";
import { useCart } from "components/context/CartService";

const SummaryPage = () => {
  const { orderItems } = useCart();

  const handleSubmit = () => {
    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderItems),
      };
      fetch("http://localhost:3000/orders", requestOptions).then(() =>
        console.log("new order added")
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <PageWrapper>
      <div className="h-screen bg-primary-white">
        <ContentContainer className="flex flex-wrap items-center">
          <div className="h-5/6 w-full pt-2">
            <SummarySection />
            <div className="flex flex-col justify-around items-center h-1/6 w-full">
              <div>
                <button
                  type="submit"
                  className="bg-secondary-pink py-2 px-10 text-white text-2xl 3xl:text-3xl rounded-2xl"
                  onClick={() => handleSubmit()}
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
