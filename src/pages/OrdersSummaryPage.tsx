import { useEffect, useState } from "react";
import OrdersSummaryItem from "components/OrdersSummary/OrdersSummaryItem";
import SectionHeader from "components/SectionHeader";
import ContentContainer from "layout/ContentContainer";
import PageWrapper from "layout/PageWrapper";
import { BASE_URL } from "config";
import { OrderItemType } from "components/OrdersSummary/OrdersSummary.types";

const OrdersSummaryPage = () => {
  const [data, setData] = useState<OrderItemType[]>([]);

  useEffect(() => {
    try {
      const dataFetch = async () => {
        const data = await (await fetch(`${BASE_URL}/orders`)).json();
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
