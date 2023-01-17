import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";

interface Props {
  name: string;
  price: number;
  quantity: number;
  img: string;
  onClick: React.MouseEventHandler<SVGSVGElement>;
}

const OrderItem: React.FC<Props> = ({
  img,
  name,
  price,
  quantity,
  onClick,
}) => {
  return (
    <div className="w-5/6 h-3/18 m-auto bg-tertiary-orange p-1 mb-4 rounded-lg">
      <div className="flex items-center justify-between w-full h-full bg-white rounded-lg overflow-hidden">
        <img src={img} className="h-full" />
        <div className="w-1/3 text-center">{name}</div>
        <div className="text-xl">{price} zł</div>
        <QuantityPicker min={0} max={9} initialValue={quantity} />
        <FontAwesomeIcon
          onClick={onClick}
          icon={faXmark}
          className="h-1/3 text-red-400 pr-4 cursor-pointer"
        />
      </div>
    </div>
  );
};
export default OrderItem;
