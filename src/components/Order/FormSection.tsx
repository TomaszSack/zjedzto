import SectionHeader from "components/SectionHeader";
import FormInput from "./FormInput";

type Props = {
  register: any;
};

const FormSection: React.FC<Props> = ({ register }) => {

  return (
    <div className="h-5/6 w-1/2 bg-white">
      <SectionHeader>Dane do dostawy</SectionHeader>
        <FormInput name="firstName" register={register} required>
          Imie *
        </FormInput>
    </div>
  );
};
export default FormSection;
