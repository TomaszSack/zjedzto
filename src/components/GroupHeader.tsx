const GroupHeader: React.FC<{ children: string }> = ({ children }) => (
  <div className="w-3/12 3xl:w-40 bg-tertiary-orange text-white text-center mb-2 3xl:mb-4 text-lg font-bold rounded-br-2xl">
    {children}
  </div>
);
export default GroupHeader;
