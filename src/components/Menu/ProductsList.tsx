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
        return "http://localhost:3000/menu?_sort=name&_order=asc";
      case "name-dec":
        return "http://localhost:3000/menu?_sort=name&_order=desc";
      case "price-asc":
        return "http://localhost:3000/menu?_sort=price&_order=asc";
      case "price-desc":
        return "http://localhost:3000/menu?_sort=price&_order=desc";
      default:
        return "http://localhost:3000/menu";
    }
  };

  useEffect(() => {
    try {
      const dataFetch = async () => {
        const data = await (await fetch(sortingFunc(sorting))).json();
        setData(data);
      };
      dataFetch();
    } catch (error: any) {
      console.error(error);
    }
  }, [sorting]);  

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-12">
        {data.map((dish) => {
          return <ProductItem key={dish.id} dish={dish} />;
        })}
      </div>
    </div>
  );
};
export default ProductsList;
