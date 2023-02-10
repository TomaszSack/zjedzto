import { useCart } from "components/context/CartService";
import GroupHeader from "components/GroupHeader";
import SectionHeader from "components/SectionHeader";
import AddressSummary from "./AddressSummary";
import CommentSummary from "./CommentSummary";
import ContactSummary from "./ContactSummary";
import SummaryOrderItem from "./SummaryOrderItem";

const SummarySection = () => {
  const { cartTotalPrice, orderItems } = useCart();

  if (!orderItems) return null;

  const {
    street,
    house_number,
    apartment_number,
    floor,
    postcode,
    city,
    first_name,
    surname,
    phone_number,
    email,
    comment,
    order,
  } = orderItems;

  return (
    <>
      <SectionHeader>Podsumowanie</SectionHeader>
      <div className="flex flex-wrap bg-white lg:h-5/18 my-4 shadow-lg">
        <AddressSummary
          street={street}
          apartment={apartment_number}
          floor={floor}
          postcode={postcode}
          city={city}
          house={house_number}
        />
        <ContactSummary
          firstName={first_name}
          surname={surname}
          phoneNumber={phone_number}
          email={email}
        />
        <CommentSummary comment={comment} />
      </div>
      <div className="bg-white h-7/18 my-4 shadow-lg rounded-b-3xl">
        <GroupHeader>Zamówienie</GroupHeader>
        <div className="h-4/6 lg:text-2xl">
          {order.map((dish) => {
            return (
              <SummaryOrderItem
                key={dish.id}
                quantity={dish.quantity}
                name={dish.name}
                price={dish.price}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between h-1/6 w-1/2 lg:w-3/12 border-t border-primary-gray ml-auto lg:text-3xl p-3">
          <div>Razem</div>
          <div>{cartTotalPrice} zł</div>
        </div>
      </div>
    </>
  );
};
export default SummarySection;
