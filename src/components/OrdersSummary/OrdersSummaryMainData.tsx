import { CartItemType } from "./OrdersSummary.types";

const OrdersSummaryMainData: React.FC<{
  orderCart: CartItemType[];
  orderId: number;
}> = ({ orderCart, orderId }) => {
  const totalPrice = orderCart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="flex flex-wrap lg:justify-around items-center w-full text-sm sm:text-base lg:text-lg xl:text-xl 3xl:text-2xl text-center h-20 px-2">
      <div className="flex flex-wrap w-full xl:w-2/3">
        {orderCart.map((item, index, arr) => {
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
        {new Date(orderId).toLocaleDateString("en-GB")}
      </div>
    </div>
  );
};

export default OrdersSummaryMainData;
