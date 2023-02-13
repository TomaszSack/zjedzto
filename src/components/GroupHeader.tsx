const GroupHeader: React.FC<{ children: string }> = ({ children }) => (
  <div className="w-24 sm:w-32 xl:w-40 3xl:w-40 bg-tertiary-orange text-white text-center mb-1 xl:mb-2 3xl:mb-4 text-sm sm:text-lg font-bold rounded-br-2xl">
    {children}
  </div>
);
export default GroupHeader;
