const dishes = [
  {
    name: "burger",
  },
  {
    name: "frytki",
  },
  {
    name: "burger",
  },
  {
    name: "burger",
  },
  {
    name: "frytki",
  },
  {
    name: "burger",
  },
];

const ProductsList = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-12">
        {dishes.map((e) => {
          return <div className="h-96 w-96 bg-red-500 min-h-min">{e.name}</div>;
        })}
      </div>
    </div>
  );
};
export default ProductsList;
