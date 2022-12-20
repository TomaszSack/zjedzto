type Props = {
  children: React.ReactNode;
};

const SectionHeader: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-full h-28 bg-tertiary-orange text-white font-bold text-5xl rounded-t-3xl shadow-lg">
      {children}
    </div>
  );
};
export default SectionHeader;
