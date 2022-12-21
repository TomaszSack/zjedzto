import GroupHeader from "components/GroupHeader";
import FormInput from "./FormInput";

const FormContactGroup: React.FC<{ register: any }> = ({ register }) => {
  return (
    <div className="bg-white shadow-lg my-6 ">
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
