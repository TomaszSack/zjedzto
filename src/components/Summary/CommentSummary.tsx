import GroupHeader from "components/GroupHeader";

const CommentSummary: React.FC<{comment?:string}> = ({comment}) => {
  return (
    <div className="w-full lg:w-1/3">
      <GroupHeader>Komentarz</GroupHeader>
      <div className="p-4 text-base lg:text-3xl w-5/6 h-5/6">
        {comment}
      </div>
    </div>
  );
};
export default CommentSummary;
