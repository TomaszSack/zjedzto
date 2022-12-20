type Props = {
  className?: string;
  children: React.ReactNode;
};

const FormInput: React.FC<Props> = ({ className, children }) => {
  return (
    <div>
      <p>{children}</p>
      <input className={`h-8 border border-primary-gray ${className}`}></input>
    </div>
  );
};
export default FormInput;
