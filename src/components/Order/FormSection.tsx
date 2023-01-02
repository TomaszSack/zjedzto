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
    <div className="h-5/6 w-1/2 pr-8">
      <SectionHeader>Dane do dostawy</SectionHeader>
      <FormAddressGroup register={register} errors={errors} />
      <FormContactGroup register={register} errors={errors} />
      <FormCommentGroup register={register} />
    </div>
  );
};
export default FormSection;
