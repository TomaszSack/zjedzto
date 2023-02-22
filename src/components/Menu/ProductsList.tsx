import ProductItem from "./ProductItem";
import { Audio } from "react-loader-spinner";

interface Products {
  id: number;
  name: string;
  price: number;
  img: string;
  alt: string;
}

const ProductsList: React.FC<{
  data: Products[];
  isLoading: boolean;
}> = ({data, isLoading}) => {

  if (isLoading)
    return (
      <div className="flex justify-center">
        <Audio
          height="100"
          width="100"
          color="rgba(245, 99, 187, 0.7)"
          ariaLabel="audio-loading"
          wrapperStyle={{}}
          wrapperClass="wrapper-class"
          visible={true}
        />
      </div>
    );

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-12">
        {data.map((dish) => {
          return <ProductItem key={dish.id} dish={dish} />;
        })}
      </div>
    </div>
  );
};
export default ProductsList;
