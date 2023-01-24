import { useCart } from "components/context/CartService";
import OrderItem from "./OrderItem";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart: React.FC<{ small?: boolean }> = ({ small }) => {
  const { cartItems, cartAmount } = useCart();

  return (
    <div className="h-5/6 bg-white shadow-lg my-3 rounded-b-3xl pt-6">
      <div className={!small ? "h-5/6" : "h-4/5"}>
        {cartItems.map((dish) => {
          return <OrderItem key={dish.id} dish={dish} small={small} />;
        })}
      </div>
      <div
        className={
          "flex items-center justify-between w-5/6 border-t border-primary-gray m-auto text-xl py-3 mb-4 " +
          (!small ? "h-1/6" : "h-1/5")
        }
      >
        {small && (
          <>
            <Button
              href="/order"
              className="text-sm px-3 pl-2 text-white flex justify-center"
            >
              Zamawiam
              <FontAwesomeIcon
                className="pl-2 text-white"
                icon={faCartShopping}
              />
            </Button>
            <div>
              <div className={small ? "text-sm" : "text-xl"}>Razem</div>
              <div>{cartAmount} zł</div>
            </div>
          </>
        )}
        {!small && (
          <>
            <div className={small ? "text-sm" : "text-xl"}>Razem</div>
            <div>{cartAmount} zł</div>
          </>
        )}
      </div>
    </div>
  );
};
export default Cart;
