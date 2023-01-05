import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const url = "http://localhost:3000/menu";

const ProductsList = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json();
      setData(data);
    };
    dataFetch();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-12">
        {data.map((dish) => {
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
