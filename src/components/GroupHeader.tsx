const GroupHeader: React.FC<{ children: string }> = ({ children }) => (
  <div className="w-4/12 lg:w-3/12 3xl:w-40 bg-tertiary-orange text-white text-center mb-1 lg:mb-2 3xl:mb-4 text-sm lg:text-lg font-bold rounded-br-2xl">
    {children}
  </div>
);
export default GroupHeader;
