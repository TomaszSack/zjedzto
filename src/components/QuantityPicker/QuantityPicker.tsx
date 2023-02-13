import { useCart } from "components/context/CartService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./QuantityPicker.css";

interface DishProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
  alt: string;
}

interface Props {
  value: number;
  max: number;
  min: number;
  dish: DishProps;
  small?:boolean;
}

const QuantityPicker: React.FC<Props> = ({ value, max, min, dish, small }) => {
  const { increaseCartQuantity, decreaseCartQuantity } = useCart();

  return (
    <span className={small ? "quantity-picker-small" : "quantity-picker"}>
      <button
        type="button"
        className={`${
          value === min ? "mod-disable " : ""
        }quantity-modifier modifier-left`}
        onClick={() => decreaseCartQuantity(dish.id)}
      >
        <FontAwesomeIcon icon={faMinus} className="h-1/2" title="minus" />
      </button>
      <input className="quantity-display" type="text" value={value} readOnly />
      <button
        type="button"
        className={`${
          value === max ? "mod-disable " : ""
        }quantity-modifier modifier-right`}
        onClick={() => increaseCartQuantity(dish)}
      >
        <FontAwesomeIcon icon={faPlus} className="h-1/2" title="plus" />
      </button>
    </span>
  );
};

export default QuantityPicker;
