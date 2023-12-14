import { genListFollowLength } from "@/helpers/common";
import { useState } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { InputOptItem } from "./InputOptItem";
import { NUM_INPUT_OPT } from "./const";

type IProps = {
  errors: FieldErrors<FieldValues>;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};

export const InputOpt: React.FC<IProps> = ({ errors, register, setValue }) => {
  const [focusIndex, setFocusIndex] = useState(0);

  return (
    <div className="mt-5 w-full">
      <div className="flex justify-between gap-2">
        {genListFollowLength(NUM_INPUT_OPT).map((_, index) => {
          return (
            <InputOptItem
              key={index}
              index={index}
              isOnFocus={focusIndex === index}
              setFocusIndex={setFocusIndex}
              register={register}
              setValue={setValue}
            />
          );
        })}
      </div>
    </div>
  );
};
