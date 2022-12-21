const GroupHeader: React.FC<{ children: string }> = ({ children }) => (
  <div className="w-1/6 bg-tertiary-orange text-white text-center mb-4 text-lg font-bold rounded-br-2xl">
    {children}
  </div>
);
export default GroupHeader;
