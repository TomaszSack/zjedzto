import Button from "components/Button";
import { useCart } from "components/context/CartService";

interface Props {
  id: number;
  name: string;
  price: number;
  img: string;
  alt: string;
}
const ProductItem: React.FC<{ dish: Props }> = ({ dish }) => {
  const { increaseCartQuantity } = useCart();

  const { name, price, img, alt } = dish;
  return (
    <div className="h-60 w-60 sm:h-80 sm:w-80 3xl:h-96 3xl:w-96 bg-white rounded-2xl overflow-hidden shadow-xl">
      <div className="h-11/18 w-full">
        <img className="w-full h-full" src={img} alt={alt} />
      </div>
      <div className="flex flex-col items-center justify-between h-7/18 text-lg 3xl:text-2xl py-1 lg:py-2 3xl:py-3">
        <div>{name}</div>
        <div>{price} zł</div>
        <Button
          onClick={() => increaseCartQuantity(dish)}
          className="cursor-pointer"
          pink
        >
          Dodaj
        </Button>
      </div>
    </div>
  );
};
export default ProductItem;
