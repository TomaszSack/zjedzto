import { useState } from "react";
import { OrderItemType } from "./OrdersSummary.types";
import OrdersSummaryDropdownData from "./OrdersSummaryDropdownData";
import OrdersSummaryMainData from "./OrdersSummaryMainData";

const OrdersSummaryItem: React.FC<{
  order: OrderItemType;
  orderId: number;
}> = ({ order, orderId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const accordionHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex w-full bg-white my-4 lg:my-8 rounded-3xl overflow-hidden transition-all shadow-lg ${
        isOpen ? "h-56 3xl:h-60" : "h-20"
      }`}
    >
      <div className="flex justify-center items-center h-full w-1/12 xl:w-1/12 bg-tertiary-orange text-white font-bold text-xl lg:text-2xl xl:text-3xl 3xl:text-4xl">
        #{orderId}
      </div>
      <div className="flex flex-col w-9/12 xl:w-10/12">
        <OrdersSummaryMainData orderCart={order.order} orderId={order.id} />
        <OrdersSummaryDropdownData order={order} isOpen={isOpen} />
      </div>
      <button
        onClick={accordionHandler}
        className="flex justify-center items-center h-full w-2/12 xl:w-1/12 bg-secondary-pink text-white text-sm lg:text-xl 3xl:text-2xl"
      >
        {!isOpen ? "Szczegóły" : "Pokaż mniej"}
      </button>
    </div>
  );
};
export default OrdersSummaryItem;
