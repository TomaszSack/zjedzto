import Button from "components/Button";
import FormSection from "components/Order/FormSection";
import ContentContainer from "layout/ContentContainer";
import PageWrapper from "layout/PageWrapper";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    console.log(values);
    navigate('/')
  };

  return (
    <PageWrapper>
      <div className="h-screen bg-primary-white">
        <ContentContainer className="flex flex-wrap items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-wrap h-5/6 w-full"
          >
            <FormSection register={register} />
            <div className="h-5/6 w-1/2 bg-red-300"></div>
            <div className="flex flex-col justify-around items-center h-1/6 w-full">
              <div>
                <button
                  type="submit"
                  className="bg-secondary-pink py-2 px-10 text-white text-3xl rounded-2xl"
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
