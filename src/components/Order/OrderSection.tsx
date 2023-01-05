import { useEffect, useState } from "react";
import SectionHeader from "components/SectionHeader";
import OrderItem from "./OrderItem";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";

const url = "http://localhost:3000/order";

const OrderSection = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json();
      setData(data);
    };
    dataFetch();
  }, []);

  const removeItem = (id: number) => {
    const newOrder = data.filter((dish) => dish.id !== id);
    setData(newOrder);
    console.log(newOrder);
  };

  return (
    <div className="h-5/6 w-1/2 pl-8">
      <SectionHeader>Zamówienie</SectionHeader>
      <div className="h-5/6 bg-white shadow-lg my-3 rounded-b-3xl pt-6">
        <div className="h-5/6">
          {data.map((dish) => {
            return (
              // <OrderItem
              //   key={dish.id}
              //   name={dish.dish}
              //   price={dish.price}
              //   quantity={dish.quantity}
              //   img={dish.img}
              //   id={dish.id}
              //   onClick={removeItem(dish.id)}
              // />
              <div
                key={dish.id}
                className="w-5/6 h-3/18 m-auto bg-tertiary-orange p-1 mb-4 rounded-lg"
              >
                <div className="flex items-center justify-between w-full h-full bg-white rounded-lg overflow-hidden">
                  <img src={dish.img} className="h-full" />
                  <div className="w-1/3 text-center">{dish.title}</div>
                  <div className="text-xl">{dish.price} zł</div>
                  {/* <div>{dish.quantity} szt</div> */}
                  <QuantityPicker min={0} max={9} value={dish.quantity} />
                  <button
                    type="button"
                    onClick={() => removeItem(dish.id)}
                    className="pr-4 text-red-400 font-bold text-2xl pb-2"
                  >
                    x
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between h-1/6 w-5/6 border-t border-primary-gray m-auto text-xl p-3">
          <div>Razem</div>
          <div>{data.reduce((a, v) => a + v.price, 0)} zł</div>
        </div>
      </div>
    </div>
  );
};
export default OrderSection;
