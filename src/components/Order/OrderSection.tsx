import SectionHeader from "components/SectionHeader";
import img from "assets/hero-img.jpeg";
import OrderItem from "./OrderItem";

const order = [
  {
    id: 1,
    dish: "Burger wołowy z bekonem",
    price: 39.99,
    quantity: 1,
    img,
  },
  {
    id: 2,
    dish: "Burger z kurczakiem",
    price: 29.99,
    quantity: 2,
    img,
  },
];
const OrderSection = () => {
  return (
    <div className="h-5/6 w-1/2 pl-8">
      <SectionHeader>Zamówienie</SectionHeader>
      <div className="h-5/6 bg-white shadow-lg my-3 rounded-b-3xl pt-6">
        <div className="h-5/6">
          {order.map((dish) => {
            return (
              <OrderItem
                key={dish.id}
                name={dish.dish}
                price={dish.price}
                quantity={dish.quantity}
                img={dish.img}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between h-1/6 w-5/6 border-t border-primary-gray m-auto text-xl p-3">
          <div>Razem</div>
          <div>{order.reduce((a, v) => a + v.price, 0)} zł</div>
        </div>
      </div>
    </div>
  );
};
export default OrderSection;
