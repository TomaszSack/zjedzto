const ContentContainer = ({ className = "", children }: any) => (
  <div className="flex justify-center h-full">
    <div className={`w-8/12 ${className}`}>{children}</div>
  </div>
);

export default ContentContainer;
