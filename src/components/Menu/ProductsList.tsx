import { useCart } from "components/context/CartService";
import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

interface Products {
  id: number;
  name: string;
  price: number;
  img: string;
  alt: string;
}

const ProductsList = () => {
  const { sorting } = useCart();
  const [data, setData] = useState<Products[]>([]);

  const sortingFunc = (sorting: string) => {
    switch (sorting) {
      case "name-asc":
        return "?_sort=name&_order=asc";
      case "name-desc":
        return "?_sort=name&_order=desc";
      case "price-asc":
        return "?_sort=price&_order=asc";
      case "price-desc":
        return "?_sort=price&_order=desc";
      default:
        return "";
    }
  };

  useEffect(() => {
    try {
      const dataFetch = async () => {
        const data = await(
          await fetch(`http://localhost:3000/menu${sortingFunc(sorting)}`)
        ).json();
        setData(data);
      };
      dataFetch();
    } catch (error: any) {
      console.error(error);
    }
  }, [sorting]);  

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-12">
        {data.map((dish) => {
          return <ProductItem key={dish.id} dish={dish} />;
        })}
      </div>
    </div>
  );
};
export default ProductsList;
