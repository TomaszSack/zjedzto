interface Props {
  children: React.ReactNode;
};

const SectionHeader: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-full h-12 lg:h-20 3xl:h-28 bg-tertiary-orange text-white font-bold text-xl lg:text-3xl 3xl:text-5xl rounded-t-3xl shadow-lg">
      {children}
    </div>
  );
};
export default SectionHeader;
