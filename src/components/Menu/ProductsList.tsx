import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const url = "http://localhost:3000/menu";

interface Products {
  id: number;
  name: string;
  price: number;
  img: string;
  alt: string;
}

const ProductsList = () => {
  const [data, setData] = useState<Products[]>([]);

  useEffect(() => {
    try {
      const dataFetch = async () => {
        const data = await (await fetch(url)).json();
        setData(data);
      };
      dataFetch();
    } catch (error: any) {
      console.error(error);
    }
  }, []);

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
