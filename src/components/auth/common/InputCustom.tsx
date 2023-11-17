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
};

const InputCustom = ({
  label,
  register,
  errors,
  placeholder,
  type,
  className,
  keyInput,
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className={className || "mb-4"}>
      <Input
        {...register(keyInput)}
        label={label}
        placeholder={placeholder}
        variant="bordered"
        labelPlacement="outside"
        type={type !== "password" ? type : isVisible ? "text" : "password"}
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
