import SectionHeader from "components/SectionHeader";
import OrderItem from "./OrderItem";
import { useCart } from "components/context/CartService";

const OrderSection = () => {
  const { cartItems, cartTotalPrice } = useCart();

  return (
    <div className="h-2/3 lg:h-5/6 w-full lg:w-1/2 px-2 lg:pl-8 order-1">
      <SectionHeader>Zamówienie</SectionHeader>
      <div className="h-5/6 bg-white shadow-lg my-3 rounded-b-3xl pt-3 lg:pt-6">
        <div className="h-5/6">
          {cartItems.map((dish) => {
            return <OrderItem key={dish.id} dish={dish} />;
          })}
        </div>
        <div className="flex items-center justify-between h-1/6 w-5/6 border-t border-primary-gray m-auto text-xl p-3">
          <div>Razem</div>
          <div>{cartTotalPrice} zł</div>
        </div>
      </div>
    </div>
  );
};
export default OrderSection;
