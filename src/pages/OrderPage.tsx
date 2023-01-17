import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "components/Button";
import FormSection from "components/Order/FormSection";
import OrderSection from "components/Order/OrderSection";
import ContentContainer from "layout/ContentContainer";
import PageWrapper from "layout/PageWrapper";

interface Order {
  id: number;
  img: string;
  title: string;
  price: number;
  quantity: number;
}

const url = "http://localhost:3000/order";

const OrderPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState<Order[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json();
      setData(data);
    };
    dataFetch();
  }, []);

  const navigate = useNavigate();

  const onSubmit = (values: any) => {
    values.order = data;
    console.log(values);
    navigate("/");
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
            <OrderSection
              data={data}
              setData={setData}
            />
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
