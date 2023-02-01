import GroupHeader from "components/GroupHeader";

interface Props {
  firstName: string;
  surname: string;
  phoneNumber: string;
  email: string;
}

const ContactSummary: React.FC<Props> = ({firstName, surname, phoneNumber, email}) => {
  return (
    <div className="w-1/3">
      <GroupHeader>Kontakt</GroupHeader>
      <div className="w-full h-5/6 p-4 text-3xl 3xl:text-4xl space-y-2">
        <p>{firstName} {surname}</p>
        <p>{phoneNumber}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default ContactSummary;
