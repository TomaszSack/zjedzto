import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "components/Button";
import FormSection from "components/Order/FormSection";
import OrderSection from "components/Order/OrderSection";
import ContentContainer from "layout/ContentContainer";
import PageWrapper from "layout/PageWrapper";
import { useCart } from "components/context/CartService";

const OrderPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { cartItems } = useCart();

  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    values.order = cartItems;
    console.log(values);
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
