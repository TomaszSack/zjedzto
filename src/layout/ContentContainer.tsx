type Props = {
  className?: string;
  children: React.ReactNode;
};
const ContentContainer: React.FC<Props> = ({ className, children }) => (
  <div className="flex justify-center h-full">
    <div className={`w-full sm:w-10/12 xl:w-8/12 ${className}`}>{children}</div>
  </div>
);

export default ContentContainer;
