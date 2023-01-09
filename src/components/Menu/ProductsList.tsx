import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const url = "http://localhost:3000/menu";

interface Products {
  id:number;
  name: string;
  price: string;
  img: string;
  alt: string;
};

const ProductsList = () => {
  const [data, setData] = useState<Products[]>([]);

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
          const {id, name, price, img, alt} = dish
          return (
            <ProductItem
              key={id}
              name={name}
              price={price}
              img={img}
              alt={alt}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductsList;
