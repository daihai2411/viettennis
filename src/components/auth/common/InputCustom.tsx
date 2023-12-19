import { Input } from "@nextui-org/input";
import { useState } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type InputProps = {
  label: any;
  register: any; //UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>;
  placeholder?: string;
  type?: string;
  className?: string;
  variant?: string;
  keyInput: string;
  required?: boolean;
  disable?: boolean;
  defaultValue?: string;
  onSubmit?: any;
  min?: number | undefined;
};

const InputCustom = ({
  label,
  register,
  errors,
  placeholder,
  type,
  className,
  keyInput,
  required,
  disable,
  defaultValue,
  onSubmit,
  min,
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className={className || "mb-4"}>
      {label && required ? (
        <div className="flex gap-1 text-small font-medium text-foreground pb-1.5">
          {label}
          <div className="text-red-600">*</div>
        </div>
      ) : (
        <div className="block text-small font-medium text-foreground pb-1.5">
          {label}
        </div>
      )}
      <Input
        {...register(keyInput)}
        defaultValue={defaultValue}
        placeholder={placeholder}
        variant="bordered"
        labelPlacement="outside"
        type={type !== "password" ? type : isVisible ? "text" : "password"}
        isDisabled={disable}
        endContent={
          type === "password" ? (
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <AiFillEye className="text-xl text-default-400 pointer-events-none" />
              ) : (
                <AiFillEyeInvisible className="text-xl text-default-400 pointer-events-none" />
              )}
            </button>
          ) : (
            false
          )
        }
        onKeyDown={handleKeyDown}
        min={min}
      />
      {errors[keyInput] && (
        <p className="text-red-500 text-xs" role="alert">
          {errors[keyInput]?.message as string}
        </p>
      )}
    </div>
  );
};

export default InputCustom;
