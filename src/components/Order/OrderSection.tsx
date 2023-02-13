import SectionHeader from "components/SectionHeader";
import Cart from "./Cart";

const OrderSection = () => {

  return (
    <div className="h-5/6 w-1/2 pl-8">
      <SectionHeader>Zamówienie</SectionHeader>
      <Cart />
    </div>
  );
};
export default OrderSection;
