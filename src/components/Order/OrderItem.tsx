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

const OrderItem: React.FC<{ dish: DishProps; small?: boolean }> = ({
  dish,
  small,
}) => {
  const { removeFromCart } = useCart();

  const { id, name, price, quantity, img, alt } = dish;

  return (
    <div 
      className={
        "bg-tertiary-orange rounded-lg " + 
        (small 
          ? "w-11/12 h-5/18 pb-1 m-auto mb-2" 
          : "lg:w-5/6 h-16 lg:h-3/18 m-3 sm:mx-8 lg:m-auto lg:mb-4")
      }>
      <div className="flex items-center justify-between w-full h-full bg-white rounded-lg overflow-hidden">
        {!small && <img src={img} alt={alt} className="h-full" />}
        <div className="w-1/4 lg:w-1/3 text-sm lg:text-lg text-center">
          {name}
        </div>
        <div className="text-lg lg:text-xl">{price} zł</div>
        <QuantityPicker min={0} max={9} value={quantity} dish={dish} small={small} />
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
