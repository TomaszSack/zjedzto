import GroupHeader from "components/GroupHeader";
import SectionHeader from "components/SectionHeader";
import FormInput from "./FormInput";

type Props = {
  register: any;
};

const FormSection: React.FC<Props> = ({ register }) => {
  return (
    <div className="h-5/6 w-1/2">
      <SectionHeader>Dane do dostawy</SectionHeader>
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
    </div>
  );
};
export default FormSection;
