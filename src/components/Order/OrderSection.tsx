import SectionHeader from "components/SectionHeader";
import Cart from "./Cart";

const OrderSection = () => {

  return (
    <div className="h-2/3 lg:h-5/6 w-full lg:w-1/2 px-2 lg:pl-8 order-1">
      <SectionHeader>Zamówienie</SectionHeader>
      <Cart />
    </div>
  );
};
export default OrderSection;
