import Button from "../Button";

type Props = {
  name: string;
  img?: string;
  price: string;
};
const ProductItem: React.FC<Props> = ({ name, img, price }) => {
  return (
    <div className="h-96 w-96 bg-white rounded-2xl overflow-hidden shadow-xl">
      <div className="h-11/18 w-full">
        <img className="w-full h-full" src={img} alt="" />
      </div>
      <div className="flex flex-col items-center justify-between h-7/18 text-2xl spaceing-2 py-3">
        <div>{name}</div>
        <div>{price}</div>
        <Button pink>Dodaj</Button>
      </div>
    </div>
  );
};
export default ProductItem;
