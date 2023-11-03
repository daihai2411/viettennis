import { Input } from "@nextui-org/react";
import { FieldErrors, FieldValues } from "react-hook-form";

type InputProps = {
  label: string;
  register: any; //UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>;
  placeholder?: string;
  type?: string;
  className?: string;
};

const InputCustom = ({
  label,
  register,
  errors,
  placeholder,
  type,
  className,
}: InputProps) => {
  return (
    <div className={className || "mb-4"}>
      <Input
        {...register(label)}
        placeholder={placeholder}
        variant="bordered"
        type={type}
      />
      {errors[label] && (
        <p className="text-red-500 text-xs" role="alert">
          {errors[label]?.message as string}
        </p>
      )}
    </div>
  );
};

export default InputCustom;
