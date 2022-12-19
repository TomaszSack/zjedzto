type Props = {
  className?: string;
  children: React.ReactNode;
};
const ContentContainer: React.FC<Props> = ({ className, children }) => (
  <div className="flex justify-center h-full">
    <div className={`w-8/12 ${className}`}>{children}</div>
  </div>
);

export default ContentContainer;
