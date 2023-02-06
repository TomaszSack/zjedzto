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
const OrdersSummaryItem: React.FC<{ order: OrderItem, orderId:number }> = ({ order, orderId }) => {
  const totalPrice = order.order
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="flex w-full h-20 bg-white my-8 rounded-3xl overflow-hidden">
      <div className="flex justify-center items-center h-full w-1/12 bg-tertiary-orange text-white font-bold text-4xl">
        #{orderId}
      </div>
      <div className="flex justify-around items-center w-10/12 text-2xl text-center">
        <div className="flex justify-center w-2/3">
          {order.order.map((item, index, array) => {
            return (
              <p key={item.id}>
                {item.quantity}x {item.name}{array.length - 1 !== index && (`,${'\u00A0'}`)}
              </p>
            );
          })}
        </div>
        <div className="w-1/6">{totalPrice} zł</div>
        <div className="w-1/6">
          {new Date(order.id).toLocaleDateString("en-GB")}
        </div>
      </div>
      <button
        onClick={() => console.log("szczegóły")}
        className="flex justify-center items-center h-full w-1/12 bg-secondary-pink text-white text-2xl"
      >
        Szczegóły
      </button>
    </div>
  );
};
export default OrdersSummaryItem;
