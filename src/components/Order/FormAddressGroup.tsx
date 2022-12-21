import GroupHeader from "components/GroupHeader";
import FormInput from "./FormInput";

const FormAddressGroup: React.FC<{ register: any }> = ({ register }) => {
  return (
    <div className="bg-white shadow-lg my-6 ">
      <GroupHeader>Adres</GroupHeader>
      <div className="grid grid-cols-2 px-8 pb-4">
        <FormInput name="street" register={register} required>
          Ulica *
        </FormInput>
        <FormInput name="localNumber" register={register} required>
          Numer *
        </FormInput>
        <FormInput name="city" register={register} required>
          Miasto *
        </FormInput>
        <FormInput name="localNumber" register={register}>
          Lokal
        </FormInput>
        <FormInput name="floor" register={register}>
          Piętro
        </FormInput>
      </div>
    </div>
  );
};
export default FormAddressGroup;
