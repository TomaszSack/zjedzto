import GroupHeader from "components/GroupHeader";
import FormInput from "./FormInput";
import { UseFormRegister, FieldValues } from "react-hook-form";

const FormContactGroup: React.FC<{
  register: UseFormRegister<FieldValues>;
}> = ({ register }) => {
  return (
    <div className="bg-white shadow-lg my-3 3xl:my-6">
      <GroupHeader>Kontakt</GroupHeader>
      <div className="grid grid-cols-2 px-8 pb-4">
        <FormInput name="firstName" register={register} required>
          Imie *
        </FormInput>
        <FormInput name="surname" register={register} required>
          Nazwisko *
        </FormInput>
        <FormInput name="phoneNumber" register={register} required>
          Telefon *
        </FormInput>
        <FormInput name="email" register={register} required>
          Email *
        </FormInput>
      </div>
    </div>
  );
};
export default FormContactGroup;
