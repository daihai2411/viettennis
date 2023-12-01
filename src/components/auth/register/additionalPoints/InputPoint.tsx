import { Input } from "@nextui-org/input";
import { useState } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import { useDispatch } from "react-redux";
import { changeValueObjPoint } from "../../store/slice";
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
  itemInput: ItemInputProps;
  setValueForm: any;
};

const InputPoint = ({
  register,
  errors,
  type,
  className,
  placeholder,
  itemInput,
  setValueForm,
}: InputProps) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const onBlur = (e) => {
    dispatch(
      changeValueObjPoint({
        [itemInput.code]: (Number(e.target.value) * itemInput.percent) / 100,
      })
    );
  };

  return (
    <div className={className || "mb-4"}>
      <div className="grid grid-cols-10 gap-4">
        <div className="hidden sm:flex items-center text-small justify-center">
          {itemInput.id}
        </div>
        <div className="col-span-5 sm:col-span-4 flex items-center">
          <div className="flex gap-1 text-small font-medium text-foreground pb-1.5">
            {itemInput.title}
            <div className="text-red-600">*</div>
          </div>
        </div>
        <div className="col-span-3">
          <Input
            {...register(itemInput.code)}
            value={value}
            placeholder={placeholder}
            variant="bordered"
            labelPlacement="outside-left"
            type={type}
            endContent={
              <SelectPoint
                personalPointCriteriaId={itemInput.id}
                inputKey={itemInput.code}
                valueDefault={value}
                setValueForm={setValueForm}
                setValue={setValue}
              />
            }
            onChange={(e: any) => setValue(e.target.value)}
            onBlur={onBlur}
            isRequired
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
