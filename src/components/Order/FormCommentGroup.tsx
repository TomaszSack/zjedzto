import GroupHeader from "components/GroupHeader";
import { UseFormRegister, FieldValues } from "react-hook-form";

const FormCommentGroup: React.FC<{
  register: UseFormRegister<FieldValues>;
}> = ({ register }) => {
  return (
    <div className="bg-white shadow-lg my-2 sm:my-3 3xl:my-6 rounded-b-3xl">
      <GroupHeader>Komentarz</GroupHeader>
      <div className="px-8 pb-2 lg:pb-4">
        <textarea
          {...register("comment")}
          className=" h-16 xl:h-24 w-full border border-primary-gray"
        />
      </div>
    </div>
  );
};
export default FormCommentGroup;
