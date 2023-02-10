import GroupHeader from "components/GroupHeader";

interface Props {
  street:string,
  house:string,
  apartment?:string,
  floor?: string,
  postcode:string;
  city:string
}

const AddressSummary: React.FC<Props> = ({ street, house, apartment, floor, postcode, city }) => {
  return (
    <div className="w-1/2 lg:w-1/3">
      <GroupHeader>Adres</GroupHeader>
      <div className="w-full h-5/6 p-4 text-base lg:text-3xl space-y-2">
        <p>ul.{street} {house}</p>
        <p>{apartment && `lokal ${apartment},`} {floor && `piętro ${floor}`}</p>
        <p>{postcode} {city}</p>
      </div>
    </div>
  );
};
export default AddressSummary;
