import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useCart } from "components/context/CartService";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DishProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
  alt: string;
}

const OrderItem: React.FC<{ dish: DishProps }> = ({ dish }) => {
  const { removeFromCart } = useCart();

  const { id, name, price, quantity, img, alt } = dish;

  return (
    <div className="lg:w-5/6 h-16 lg:h-3/18 bg-tertiary-orange p-1 m-3 lg:m-auto lg:mb-4 rounded-lg">
      <div className="flex items-center justify-between w-full h-full bg-white rounded-lg overflow-hidden">
        <img src={img} alt={alt} className="h-full" />
        <div className="w-1/4 lg:w-1/3 text-sm lg:text-lg text-center">
          {name}
        </div>
        <div className="text-lg lg:text-xl">{price} zł</div>
        <QuantityPicker min={0} max={9} value={quantity} dish={dish} />
        <FontAwesomeIcon
          onClick={() => removeFromCart(id)}
          icon={faXmark}
          className="lg:h-1/3 text-red-400 pr-4 cursor-pointer"
        />
      </div>
    </div>
  );
};
export default OrderItem;
