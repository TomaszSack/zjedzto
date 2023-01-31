import { useCart } from "components/context/CartService";
import GroupHeader from "components/GroupHeader";
import SectionHeader from "components/SectionHeader";
import AddressSummary from "./AddressSummary";
import CommentSummary from "./CommentSummary";
import ContactSummary from "./ContactSummary";
import SummaryOrderItem from "./SummaryOrderItem";

const SummarySection = () => {
  const { cartTotalPrice, orderItems } = useCart();

  return (
    <>
      <SectionHeader>Podsumowanie</SectionHeader>
      <div className="flex bg-white h-5/18 my-4 shadow-lg">
        <AddressSummary />
        <ContactSummary />
        <CommentSummary />
      </div>
      <div className="bg-white h-7/18 my-4 shadow-lg rounded-b-3xl">
        <GroupHeader>Zamówienie</GroupHeader>
        <div className="h-4/6 text-2xl">
          <SummaryOrderItem />
          <SummaryOrderItem />
          <SummaryOrderItem />
          <SummaryOrderItem />
          <SummaryOrderItem />
        </div>
        <div className="flex items-center justify-between h-1/6 w-1/6 border-t border-primary-gray ml-auto text-xl p-3">
          <div>Razem</div>
          <div>{cartTotalPrice} zł</div>
        </div>
      </div>
    </>
  );
};
export default SummarySection;
