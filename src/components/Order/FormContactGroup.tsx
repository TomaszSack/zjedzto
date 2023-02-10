import GroupHeader from "components/GroupHeader";
import FormInput from "./FormInput";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

const FormContactGroup: React.FC<{
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}> = ({ register, errors }) => {
  return (
    <div className="bg-white shadow-lg my-2 sm:my-3 3xl:my-6">
      <GroupHeader>Kontakt</GroupHeader>
      <div className="grid grid-cols-2 px-8 pb-2 lg:pb-4">
        <FormInput
          name="first_name"
          register={register}
          errors={errors}
          required
        >
          Imie *
        </FormInput>
        <FormInput name="surname" register={register} errors={errors} required>
          Nazwisko *
        </FormInput>
        <FormInput
          name="phone_number"
          register={register}
          errors={errors}
          required
        >
          Telefon *
        </FormInput>
        <FormInput name="email" register={register} errors={errors} required>
          Email *
        </FormInput>
      </div>
    </div>
  );
};
export default FormContactGroup;
