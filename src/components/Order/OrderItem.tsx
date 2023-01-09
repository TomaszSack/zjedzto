import QuantityPicker from "components/QuantityPicker/QuantityPicker";

interface Props {
  name: string;
  price: number;
  quantity: number;
  img: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
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
        <button
          type="button"
          className="pr-4 text-red-400 font-bold text-2xl pb-2"
          onClick={onClick}
        >
          x
        </button>
      </div>
    </div>
  );
};
export default OrderItem;
