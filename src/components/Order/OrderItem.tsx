import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useCart } from "components/context/CartService";

interface DishProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
  alt: string;
}

const OrderItem: React.FC<{ dish: DishProps; small?: boolean }> = ({
  dish,
  small,
}) => {
  const { removeFromCart } = useCart();

  const { id, name, price, quantity, img, alt } = dish;

  return (
    <div className={!small ? "w-5/6 h-3/18 m-auto bg-tertiary-orange p-1 mb-4 rounded-lg" : "h-5/18"}>
      <div className="flex items-center justify-between w-full h-full bg-white rounded-lg overflow-hidden">
        {!small && <img src={img} alt={alt} className="h-full" />}
        <div className="w-1/3 text-center text-sm">{name}</div>
        <div className="text-lg">{price} zł</div>
        <QuantityPicker min={0} max={9} value={quantity} dish={dish} small={small} />
        <button
          type="button"
          className="pr-4 text-red-400 font-bold text-2xl pb-2"
          onClick={() => removeFromCart(id)}
        >
          x
        </button>
      </div>
    </div>
  );
};
export default OrderItem;
