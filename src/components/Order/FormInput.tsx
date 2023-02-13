import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface Props {
  className?: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  children: React.ReactNode;
  errors: FieldErrors<FieldValues>;
};

const FormInput: React.FC<Props> = ({
  className,
  name,
  register,
  required,
  children,
  errors,
}) => {
  return (
    <div className="sm:p-1 px-2 xl:px-4">
      <div className="flex flex-col sm:flex-row justify-between">
        <label htmlFor={name} className="text-xs">
          {children}
        </label>
        {errors[name] && (
          <p role="alert" className="pr-2  text-red-400 text-xs font-bold">
            Pole wymagane!
          </p>
        )}
      </div>
      <input
        id={name}
        aria-label={name}
        {...register(name, { required })}
        className={`h-5 sm:h-7 lg:h-6 xl:h-7 3xl:h-8 w-full border border-primary-gray ${className} ${errors[name] && 'border-red-400'}`}
      ></input>
    </div>
  );
};
export default FormInput;
