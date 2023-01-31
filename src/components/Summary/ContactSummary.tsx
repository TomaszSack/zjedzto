import GroupHeader from "components/GroupHeader";

const ContactSummary = () => {
  return (
    <div className="w-1/3">
      <GroupHeader>Kontakt</GroupHeader>
      <div className="w-full h-5/6 p-4 text-3xl 3xl:text-4xl space-y-2">
        <p>Tomasz Sack</p>
        <p>+48 123123123</p>
        <p>tomasz@mail.pl</p>
      </div>
    </div>
  );
};
export default ContactSummary;
