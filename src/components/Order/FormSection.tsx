import SectionHeader from "components/SectionHeader";
import FormInput from "./FormInput";

const FormSection = () => {
    return (
      <div className="h-5/6 w-1/2 bg-white">
        <SectionHeader>Dane do dostawy</SectionHeader>
        <FormInput>Imie</FormInput>
      </div>
    );
}
export default FormSection;