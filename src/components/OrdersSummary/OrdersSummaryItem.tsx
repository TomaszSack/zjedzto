import { useState } from "react";

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
const OrdersSummaryItem: React.FC<{ order: OrderItem; orderId: number }> = ({
  order,
  orderId,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const accordionHandler = () => {
    setIsOpen(!isOpen);
  };

  const totalPrice = order.order
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div
      className={`flex w-full bg-white my-4 lg:my-8 rounded-3xl overflow-hidden transition-all shadow-lg ${
        isOpen ? "h-60" : "h-20"
      }`}
    >
      <div className="flex justify-center items-center h-full w-1/12 xl:w-1/12 bg-tertiary-orange text-white font-bold text-xl lg:text-2xl xl:text-4xl">
        #{orderId}
      </div>
      <div className="flex flex-col w-9/12 xl:w-10/12">
        <div className="flex flex-wrap lg:justify-around items-center w-full text-sm sm:text-base lg:text-lg xl:text-2xl text-center h-20 px-2">
          <div className="flex flex-wrap w-full xl:w-2/3">
            {order.order.map((item, index, arr) => {
              return (
                <p key={item.id}>
                  {item.quantity}x {item.name}
                  {index + 1 < arr.length ? ", " : ""}
                </p>
              );
            })}
          </div>
          <div className="w-1/2 lg:w-1/6">{totalPrice} zł</div>
          <div className="w-1/2 lg:w-1/6">
            {new Date(order.id).toLocaleDateString("en-GB")}
          </div>
        </div>
        <div
          className={`flex flex-wrap justify-around w-full transition-all text-sm sm:text-base xl:text-xl text-center break-words xl:px-8 ${
            !isOpen ? "h-0 z-minus" : "h-40"
          }`}
        >
          <div className="w-1/2 lg:w-1/3">
            <h3 className="pb-2 font-bold">Dane dostawy</h3>
            <p>
              ul.{order.street} {order.house_number}
            </p>
            <p>
              lokal {order.apartment_number}, piętro {order.floor}
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
      </div>
      <button
        onClick={accordionHandler}
        className="flex justify-center items-center h-full w-2/12 xl:w-1/12 bg-secondary-pink text-white text-sm lg:text-xl xl:text-2xl"
      >
        {!isOpen ? "Szczegóły" : "Pokaż mniej"}
      </button>
    </div>
  );
};
export default OrdersSummaryItem;
