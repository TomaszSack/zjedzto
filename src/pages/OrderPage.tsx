import ContentContainer from "layout/ContentContainer";
import PageWrapper from "layout/PageWrapper";

const OrderPage = () => {
  return (
    <PageWrapper>
      <div className="h-screen bg-primary-white">
        <ContentContainer className="flex flex-wrap items-center">
          <div className="flex flex-wrap h-5/6 w-full">
            <div className="h-5/6 w-1/2 bg-red-500"></div>
            <div className="h-5/6 w-1/2 bg-red-300"></div>
            <div className="h-1/6 w-full bg-red-400"></div>
          </div>
        </ContentContainer>
      </div>
    </PageWrapper>
  );
};
export default OrderPage;
