import { useEffect, useState } from "react";
import OrdersSummaryItem from "components/OrdersSummary/OrdersSummaryItem";
import SectionHeader from "components/SectionHeader";
import ContentContainer from "layout/ContentContainer";
import PageWrapper from "layout/PageWrapper";
import { BASE_URL } from "config";
import { OrderItemType } from "components/OrdersSummary/OrdersSummary.types";
import { Audio } from "react-loader-spinner";

const OrdersSummaryPage = () => {
  const [data, setData] = useState<OrderItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const dataFetch = async () => {
        const data = await (await fetch(`${BASE_URL}/orders`)).json();
        setIsLoading(false)
        setData(data);
      };
      dataFetch();
    } catch (error: any) {
      console.error(error);
    }
  }, []);

  return (
    <PageWrapper>
      <ContentContainer className="px-2 py-20 lg:pt-32 lg:pb-24">
        <SectionHeader>Twoje zamówienia</SectionHeader>
        {isLoading && (
          <div className="flex items-center justify-center h-full ">
            <Audio
              height="100"
              width="100"
              color="rgba(245, 99, 187, 0.7)"
              ariaLabel="audio-loading"
              wrapperStyle={{}}
              wrapperClass="wrapper-class"
              visible={true}
            />
          </div>
        )}
        {data
          .slice(0)
          .reverse()
          .map((order, index, array) => {
            const i = array.length - index;
            return <OrdersSummaryItem key={i} order={order} orderId={i} />;
          })}
      </ContentContainer>
    </PageWrapper>
  );
};
export default OrdersSummaryPage;
