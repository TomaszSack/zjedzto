import GroupHeader from "components/GroupHeader";

const AddressSummary = () => {
  return (
    <div className="w-1/3">
      <GroupHeader>Adres</GroupHeader>
      <div className="w-full h-5/6 p-4 text-3xl 3xl:text-4xl space-y-2">
        <p>ul.Batorego 16,</p>
        <p>lokal 4, piętro 2</p>
        <p>14-100 Ostróda</p>
      </div>
    </div>
  );
};
export default AddressSummary;
