import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./QuantityPicker.css";

interface Props {
  initialValue: number;
  max: number;
  min: number;
}

const QuantityPicker: React.FC<Props> = ({ initialValue, max, min }) => {
  const [value, setValue] = useState<number>(initialValue);
  const [disableDec, setDisableDec] = useState(false);
  const [disableInc, setDisableInc] = useState(false);

  const increment = () => {
    const plusState = value + 1;
    if (value < max) {
      setValue(plusState);
    }
    if (value === max - 1) {
      setDisableInc(true);
    }
    if (value === min) {
      setDisableDec(false);
    }
  };

  const decrement = () => {
    const minusState = value - 1;
    if (value > min) {
      setValue(minusState);
      if (value == min + 1) {
        setDisableDec(true);
      }
    } else {
      setValue(min);
    }
    if (value == max) {
      setDisableInc(false);
    }
  };

  return (
    <span className="quantity-picker">
      <button
        type="button"
        className={`${
          disableDec ? "mod-disable " : ""
        }quantity-modifier modifier-left`}
        onClick={decrement}
      >
        <FontAwesomeIcon icon={faMinus} className="h-1/2" title="minus" />
      </button>
      <input className="quantity-display" type="text" value={value} readOnly />
      <button
        type="button"
        className={`${
          disableInc ? "mod-disable " : ""
        }quantity-modifier modifier-right`}
        onClick={increment}
      >
        <FontAwesomeIcon icon={faPlus} className="h-1/2" title="plus" />
      </button>
    </span>
  );
};

export default QuantityPicker;
