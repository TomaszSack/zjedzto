import Button from "components/Button";

type Props = {
  name: string;
  img?: string;
  price: string;
  alt: string;
};
const ProductItem: React.FC<Props> = ({ alt, name, img, price }) => {
  return (
    <div className="h-80 w-80 3xl:h-96 3xl:w-96 bg-white rounded-2xl overflow-hidden shadow-xl">
      <div className="h-11/18 w-full">
        <img className="w-full h-full" src={img} alt={alt} />
      </div>
      <div className="flex flex-col items-center justify-between h-7/18 text-lg 3xl:text-2xl py-2 3xl:py-3">
        <div>{name}</div>
        <div>{price} zł</div>
        <Button pink>Dodaj</Button>
      </div>
    </div>
  );
};
export default ProductItem;
