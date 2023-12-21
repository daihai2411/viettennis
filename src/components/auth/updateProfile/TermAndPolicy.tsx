import { Checkbox } from "@nextui-org/react";
import { useState } from "react";

const TermAndPolicy = ({ register, errors, keyInput, setValue }) => {
  const [isSelected, setIsSelected] = useState(false);

  const onValueChange = (val: boolean) => {
    setIsSelected(val);
    setValue(keyInput, val);
  };

  return (
    <div className="mb-4">
      <Checkbox
        {...register(keyInput)}
        isSelected={isSelected}
        onValueChange={onValueChange}
      >
        <div className="inline-block text-base">
          <div className="inline-block hover:underline text-[#1677ff]">
            Điều khoản
          </div>{" "}
          và{" "}
          <div className="inline-block hover:underline text-[#1677ff]">
            chính sách quyền riêng tư
          </div>
        </div>
      </Checkbox>
      {errors[keyInput] && (
        <p className="text-red-500 text-xs" role="alert">
          {errors[keyInput]?.message as string}
        </p>
      )}
    </div>
  );
};

export default TermAndPolicy;
