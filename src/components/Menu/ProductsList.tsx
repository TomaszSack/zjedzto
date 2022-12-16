import ProductItem from "./ProductItem";
import img from "../../assets/hero-img.jpeg"

const dishes = [
  {
    name: "Burger wołowy z bekonem",
    price: "32,99 zł",
    img
  },
  {
    name: "Burger z kurczakiem",
    price: "30,99",
    img
  },
  {
    name: "Burger wołowy na ostro",
    price: "35,99",
    img
  },
  {
    name: "Burger wege",
    price: "27,99",
    img
  },
  {
    name: "Frytki",
    price: "6,99",
    img
  },
  {
    name: "Krążki cebulowe",
    price: "8,99",
    img
  },
];

const ProductsList = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-12 ">
        {dishes.map((e) => {
          return <ProductItem name={e.name} price={e.price} img={e.img} />;
        })}
      </div>
    </div>
  );
};
export default ProductsList;
