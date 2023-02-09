import SectionHeader from "components/SectionHeader";
import FormAddressGroup from "./FormAddressGroup";
import FormCommentGroup from "./FormCommentGroup";
import FormContactGroup from "./FormContactGroup";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

const FormSection: React.FC<{
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}> = ({ register, errors }) => {
  return (
    <div className="h-5/6 w-full lg:w-1/2 px-2 pt-6 lg:pt-0 lg:pr-8 order-2 lg:order-1">
      <SectionHeader>Dane do dostawy</SectionHeader>
      <FormAddressGroup {...{register, errors}} />
      <FormContactGroup {...{register, errors}} />
      <FormCommentGroup {...{register}} />
    </div>
  );
};
export default FormSection;
