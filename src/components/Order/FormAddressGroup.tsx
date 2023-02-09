import GroupHeader from "components/GroupHeader";
import FormInput from "./FormInput";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

const FormAddressGroup: React.FC<{
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}> = ({ register, errors }) => {
  return (
    <div className="bg-white shadow-lg my-2 lg:my-3 3xl:my-6 ">
      <GroupHeader>Adres</GroupHeader>
      <div className="grid grid-cols-2 px-8 pb-2 lg:pb-4">
        <FormInput name="street" register={register} errors={errors} required>
          Ulica *
        </FormInput>
        <FormInput
          name="house_number"
          register={register}
          errors={errors}
          required
        >
          Numer *
        </FormInput>
        <FormInput name="postcode" register={register} errors={errors} required>
          Kod pocztowy *
        </FormInput>
        <FormInput name="city" register={register} errors={errors} required>
          Miasto *
        </FormInput>
        <FormInput name="apartment_number" register={register} errors={errors}>
          Lokal
        </FormInput>
        <FormInput name="floor" register={register} errors={errors}>
          Piętro
        </FormInput>
      </div>
    </div>
  );
};
export default FormAddressGroup;
