import { OrderItemType } from "./OrdersSummary.types";

const OrdersSummaryDropdownData: React.FC<{
  order: OrderItemType;
  isOpen: boolean;
}> = ({ order, isOpen }) => {
  return (
    <div
      className={`flex flex-wrap justify-around w-full transition-all text-sm sm:text-base xl:text-lg 3xl:text-xl text-center break-words xl:px-8 ${
        !isOpen ? "h-0 z-minus" : "h-40"
      }`}
    >
      <div className="w-1/2 lg:w-1/3">
        <h3 className="pb-2 font-bold">Dane dostawy</h3>
        <p>
          ul.{order.street} {order.house_number}
        </p>
        <p>
          {order.apartment_number && `lokal ${order.apartment_number},`}{" "}
          {order.floor && `piętro ${order.floor}`}
        </p>
        <p>
          {order.postcode} {order.city}
        </p>
      </div>
      <div className="w-1/2 lg:w-1/3">
        <h3 className="pb-2 font-bold">Kontakt</h3>
        <p>
          {order.first_name} {order.surname}
        </p>
        <p>{order.phone_number}</p>
        <p>{order.email}</p>
      </div>
      <div className="w-full lg:w-1/3">
        <h3 className="pb-2 font-bold">Komentarz</h3>
        <p>{order.comment}</p>
      </div>
    </div>
  );
};

export default OrdersSummaryDropdownData;
