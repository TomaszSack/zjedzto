type Props = {
  className?: string;
  name: string;
  register: any;
  required?: boolean;
  children: React.ReactNode;
};

const FormInput: React.FC<Props> = ({
  className,
  name,
  register,
  required,
  children,
}) => {
  return (
    <div>
      <p>{children}</p>
      <input
        {...register(name, { required })}
        className={`h-8 w-64 border border-primary-gray ${className}`}
      ></input>
    </div>
  );
};
export default FormInput;
