import { useEffect, useState } from "react";
import OrdersSummaryItem from "components/OrdersSummary/OrdersSummaryItem";
import SectionHeader from "components/SectionHeader";
import ContentContainer from "layout/ContentContainer";
import PageWrapper from "layout/PageWrapper";

interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  alt: string;
  quantity: number;
}

interface OrderItem {
  apartment_number: string;
  city: string;
  comment: string;
  email: string;
  first_name: string;
  floor: string;
  house_number: string;
  order: CartItem[];
  phone_number: string;
  postcode: string;
  street: string;
  surname: string;
  id: number;
}

const url = "http://localhost:3000/orders";

const OrdersSummaryPage = () => {
  const [data, setData] = useState<OrderItem[]>([]);

  useEffect(() => {
    try {
      const dataFetch = async () => {
        const data = await (await fetch(url)).json();
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
