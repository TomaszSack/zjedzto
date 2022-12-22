import SectionHeader from "components/SectionHeader";

const order = [
    {
        dish:"Burger wołowy z bekonem",
        price: 39.99,
        quantity: 1,
    },
    {
        dish:"Burger z kurczakiem",
        price: 29.99,
        quantity: 2,
    },
]
const OrderSection = () => {
  return (
    <div className="h-5/6 w-1/2 pl-8">
      <SectionHeader>Zamówienie</SectionHeader>
      <div className="h-5/6 bg-white shadow-lg my-3 rounded-b-3xl">
        
      </div>
    </div>
  );
};
export default OrderSection;
