import ProductItem from "./ProductItem";
import img from "assets/hero-img.jpeg";

const dishes = [
  {
    id: 1,
    name: "Burger wołowy z bekonem",
    price: "32,99 zł",
    img,
    alt: "soczysty burger wołowy z frytkami",
  },
  {
    id: 2,
    name: "Burger z kurczakiem",
    price: "30,99",
    img,
    alt: "soczysty burger wołowy z frytkami",
  },
  {
    id: 3,
    name: "Burger wołowy na ostro",
    price: "35,99",
    img,
    alt: "soczysty burger wołowy z frytkami",
  },
  {
    id: 4,
    name: "Burger wege",
    price: "27,99",
    img,
    alt: "soczysty burger wołowy z frytkami",
  },
  {
    id: 5,
    name: "Frytki",
    price: "6,99",
    img,
    alt: "soczysty burger wołowy z frytkami",
  },
  {
    id: 6,
    name: "Krążki cebulowe",
    price: "8,99",
    img,
    alt: "soczysty burger wołowy z frytkami",
  },
];

const ProductsList = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-12 ">
        {dishes.map((dish) => {
          return (
            <ProductItem
              key={dish.id}
              name={dish.name}
              price={dish.price}
              img={dish.img}
              alt={dish.alt}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductsList;
