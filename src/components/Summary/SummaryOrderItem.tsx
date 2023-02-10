interface Props {
  name: string;
  price: number;
  quantity: number;
}

const SummaryOrderItem: React.FC<Props> = ({ name, price, quantity }) => (
  <div className="flex justify-between h-1/6 p-4 lg:text-3xl">
    <p>
      {quantity}x {name}
    </p>
    <p>
      {quantity}x {price} zł
    </p>
  </div>
);
export default SummaryOrderItem;
