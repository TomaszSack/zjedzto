import SectionHeader from "components/SectionHeader";
import FormAddressGroup from "./FormAddressGroup";
import FormCommentGroup from "./FormCommentGroup";
import FormContactGroup from "./FormContactGroup";

const FormSection: React.FC<{ register: any }> = ({ register }) => {
  return (
    <div className="h-5/6 w-1/2">
      <SectionHeader>Dane do dostawy</SectionHeader>
      <FormAddressGroup register={register} />
      <FormContactGroup register={register} />
      <FormCommentGroup register={register} />
    </div>
  );
};
export default FormSection;
