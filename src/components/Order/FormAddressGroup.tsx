import GroupHeader from "components/GroupHeader";
import FormInput from "./FormInput";
import { UseFormRegister, FieldValues } from "react-hook-form";

const FormAddressGroup: React.FC<{
  register: UseFormRegister<FieldValues>;
}> = ({ register }) => {
  return (
    <div className="bg-white shadow-lg my-3 3xl:my-6 ">
      <GroupHeader>Adres</GroupHeader>
      <div className="grid grid-cols-2 px-8 pb-4">
        <FormInput name="street" register={register} required>
          Ulica *
        </FormInput>
        <FormInput name="house_number" register={register} required>
          Numer *
        </FormInput>
        <FormInput name="postcode" register={register} required>
          Kod pocztowy *
        </FormInput>
        <FormInput name="city" register={register} required>
          Miasto *
        </FormInput>
        <FormInput name="apartment_number" register={register}>
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
