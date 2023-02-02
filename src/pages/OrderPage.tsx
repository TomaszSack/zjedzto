import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "components/Button";
import FormSection from "components/Order/FormSection";
import OrderSection from "components/Order/OrderSection";
import ContentContainer from "layout/ContentContainer";
import PageWrapper from "layout/PageWrapper";
import { useCart } from "components/context/CartService";

const OrderPage = () => {
  const { cartItems, setOrderItems, orderItems } = useCart();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      apartment_number: orderItems?.apartment_number,
      city: orderItems?.city,
      comment: orderItems?.comment,
      email: orderItems?.email,
      first_name: orderItems?.first_name,
      floor: orderItems?.floor,
      house_number: orderItems?.house_number,
      phone_number: orderItems?.phone_number,
      postcode: orderItems?.postcode,
      street: orderItems?.street,
      surname: orderItems?.surname,
    },
  });

  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    values.order = cartItems;
    values.id = Date.now();
    setOrderItems(values);
    navigate("/summary");
  };

  return (
    <PageWrapper>
      <div className="h-screen bg-primary-white">
        <ContentContainer className="flex flex-wrap items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-wrap h-5/6 w-full pt-2"
          >
            <FormSection register={register} errors={errors} />
            <OrderSection />
            <div className="flex flex-col justify-around items-center h-1/6 w-full">
              <div>
                <button
                  type="submit"
                  className="bg-secondary-pink py-2 px-10 text-white text-2xl 3xl:text-3xl rounded-2xl"
                >
                  Zamawiam
                </button>
              </div>
              <div>
                <Button href="/" cancel>
                  Anuluj
                </Button>
              </div>
            </div>
          </form>
        </ContentContainer>
      </div>
    </PageWrapper>
  );
};
export default OrderPage;
