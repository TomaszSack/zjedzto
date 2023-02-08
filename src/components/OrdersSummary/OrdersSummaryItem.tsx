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
      className={`flex w-full bg-white my-8 rounded-3xl overflow-hidden transition-all ${
        isOpen ? "h-60" : "h-20"
      }`}
    >
      <div className="flex justify-center items-center h-full w-1/12 bg-tertiary-orange text-white font-bold text-4xl">
        #{orderId}
      </div>
      <div className="flex flex-col w-10/12">
        <div className="flex justify-around items-center w-full text-2xl text-center h-20">
          <div className="flex justify-start w-2/3 pl-12">
            {order.order.map((item, index) => {
              return (
                <p key={item.id}>
                  {index ? ", " : ""}
                  {item.quantity}x {item.name}
                </p>
              );
            })}
          </div>
          <div className="w-1/6">{totalPrice} zł</div>
          <div className="w-1/6">
            {new Date(order.id).toLocaleDateString("en-GB")}
          </div>
        </div>
        <div
          className={`flex justify-around items-start w-full transition-all text-xl text-center px-8 ${
            !isOpen ? "h-0 z-minus" : "h-40"
          }`}
        >
          <div className="w-1/3">
            <h3 className="pb-2 font-bold">Dane dostawy</h3>
            <p>
              ul.{order.street} {order.house_number}
            </p>
            <p>
              {order.apartment_number && `lokal ${order.apartment_number},`} {order.floor && `piętro ${order.floor}`}
            </p>
            <p>
              {order.postcode} {order.city}
            </p>
          </div>
          <div className="w-1/3">
            <h3 className="pb-2 font-bold">Kontakt</h3>
            <p>
              {order.first_name} {order.surname}
            </p>
            <p>{order.phone_number}</p>
            <p>{order.email}</p>
          </div>
          <div className="w-1/3">
            <h3 className="pb-2 font-bold">Komentarz</h3>
            <p>{order.comment}</p>
          </div>
        </div>
      </div>
      <button
        onClick={accordionHandler}
        className="flex justify-center items-center h-full w-1/12 bg-secondary-pink text-white text-2xl"
      >
        {!isOpen ? "Szczegóły" : "Pokaż mniej"}
      </button>
    </div>
  );
};
export default OrdersSummaryItem;
