import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface Props {
  className?: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  children: React.ReactNode;
  errors: FieldErrors<FieldValues>;
}

const FormInput: React.FC<Props> = ({
  className,
  name,
  register,
  required,
  children,
  errors,
}) => {
  return (
    <div className="p-1">
      <div className="flex justify-between">
        <label htmlFor={name} className="text-xs">
          {children}
        </label>
        {errors[name] && (
          <p role="alert" className="pr-2 text-red-400 text-xs font-bold">
            Pole wymagane!
          </p>
        )}
      </div>
      <input
        id={name}
        aria-label={name}
        {...register(name, { required })}
        className={`h-6 3xl:h-8 w-64 border border-primary-gray ${className}`}
      ></input>
    </div>
  );
};
export default FormInput;
