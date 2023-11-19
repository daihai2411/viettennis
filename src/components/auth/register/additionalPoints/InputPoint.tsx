import { Input } from "@nextui-org/input";
import { useState } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import SelectPoint from "./SelectPoint";

type ItemInputProps = {
  code: string;
  id: number;
  percent: number;
  title: string;
};

type InputProps = {
  register: any; //UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>;
  placeholder?: string;
  type?: string;
  className?: string;
  variant?: string;
  isShowQuickSelect: boolean;
  itemInput: ItemInputProps;
};

const InputPoint = ({
  register,
  errors,
  type,
  className,
  placeholder,
  isShowQuickSelect,
  itemInput,
}: InputProps) => {
  const [value, setValue] = useState(0);

  return (
    <div className={className || "mb-4"}>
      <div className="grid grid-cols-10 gap-4">
        <div className="hidden sm:flex items-center text-small justify-center">
          {itemInput.id}
        </div>
        <div className="col-span-5 sm:col-span-4 flex items-center">
          <div className="block text-small font-medium text-foreground pb-1.5">
            {itemInput.title}
          </div>
        </div>
        <div className="col-span-3">
          <Input
            {...register(itemInput.code)}
            placeholder={placeholder}
            variant="bordered"
            labelPlacement="outside-left"
            type={type}
            endContent={isShowQuickSelect ? <SelectPoint /> : null}
            onChange={(e: any) => setValue(e.target.value)}
          />
          {errors[itemInput.code] && (
            <p className="text-red-500 text-xs" role="alert">
              {errors[itemInput.code]?.message as string}
            </p>
          )}
        </div>
        <div className="flex justify-end items-center text-small">
          {itemInput.percent}%
        </div>
        <div className="flex justify-end items-center text-small">
          {(value * itemInput.percent) / 100 || "--"}
        </div>
      </div>
    </div>
  );
};

export default InputPoint;
