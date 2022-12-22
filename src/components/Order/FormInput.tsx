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
    <div className="p-1">
      <p className="text-xs">{children}</p>
      <input
        {...register(name, { required })}
        className={`h-6 3xl:h-8 w-56 3xl:w-64 border border-primary-gray ${className}`}
      ></input>
    </div>
  );
};
export default FormInput;
