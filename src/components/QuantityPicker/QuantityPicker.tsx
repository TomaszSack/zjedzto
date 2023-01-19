import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./QuantityPicker.css";
import { useCart } from "components/services/CartService";

interface DishProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
  alt: string;
}

interface Props {
  initialValue: number;
  max: number;
  min: number;
  dish: DishProps;
}

const QuantityPicker: React.FC<Props> = ({
  initialValue,
  max,
  min,
  dish,
}) => {
  const [value, setValue] = useState<number>(initialValue);
  const [disableDec, setDisableDec] = useState(false);
  const [disableInc, setDisableInc] = useState(false);

  const { increaseCartQuantity, decreaseCartQuantity } =
    useCart();


  // const increment = () => {
  //   const plusState = value + 1;
  //   if (value < max) {
  //     setValue(plusState);
  //   }
  //   if (value === max - 1) {
  //     setDisableInc(true);
  //   }
  //   if (value === min) {
  //     setDisableDec(false);
  //   }
  // };

  // const decrement = () => {
  //   const minusState = value - 1;
  //   if (value > min) {
  //     setValue(minusState);
  //     if (value == min + 1) {
  //       setDisableDec(true);
  //     }
  //   } else {
  //     setValue(min);
  //   }
  //   if (value == max) {
  //     setDisableInc(false);
  //   }
  // };

  return (
    <span className="quantity-picker">
      <button
        type="button"
        className={`${
          disableDec ? "mod-disable " : ""
        }quantity-modifier modifier-left`}
        onClick={() => decreaseCartQuantity(dish.id)}
      >
        <FontAwesomeIcon icon={faMinus} className="h-1/2" title="minus" />
      </button>
      <input
        className="quantity-display"
        type="text"
        value={initialValue}
        readOnly
      />
      <button
        type="button"
        className={`${
          (initialValue===max) ? "mod-disable " : ""
        }quantity-modifier modifier-right`}
        onClick={() => increaseCartQuantity(dish)}
      >
        <FontAwesomeIcon icon={faPlus} className="h-1/2" title="plus" />
      </button>
    </span>
  );
};

export default QuantityPicker;
