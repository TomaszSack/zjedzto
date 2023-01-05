import { Dispatch, SetStateAction } from "react";
import SectionHeader from "components/SectionHeader";
import OrderItem from "./OrderItem";

interface Order {
  id:number;
  img: string;
  title: string;
  price: number;
  quantity: number;
}

type OrderType = Order[]

interface Props {
  data: OrderType;
  setData: Dispatch<SetStateAction<OrderType>>;
}

const OrderSection: React.FC<Props> = ({ data, setData }) => {

  const removeItem = (id: number) => {
    const newOrder = data.filter((dish) => dish.id !== id);
    setData(newOrder);
  };

  return (
    <div className="h-5/6 w-1/2 pl-8">
      <SectionHeader>Zamówienie</SectionHeader>
      <div className="h-5/6 bg-white shadow-lg my-3 rounded-b-3xl pt-6">
        <div className="h-5/6">
          {data.map((dish) => {
            return (
              <OrderItem
                key={dish.id}
                name={dish.title}
                price={dish.price}
                quantity={dish.quantity}
                img={dish.img}
                onClick={removeItem.bind(null, dish.id)}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between h-1/6 w-5/6 border-t border-primary-gray m-auto text-xl p-3">
          <div>Razem</div>
          <div>{data.reduce((a, v) => a + v.price, 0)} zł</div>
        </div>
      </div>
    </div>
  );
};
export default OrderSection;
