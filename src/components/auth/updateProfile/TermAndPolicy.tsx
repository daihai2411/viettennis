import { Checkbox } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

const TermAndPolicy = ({ register, errors, keyInput, setValue }) => {
  const [isSelected, setIsSelected] = useState(false);

  const onValueChange = (val: boolean) => {
    setIsSelected(val);
    setValue(keyInput, val);
  };

  return (
    <div className="my-2">
      <Checkbox
        {...register(keyInput)}
        isSelected={isSelected}
        onValueChange={onValueChange}
      >
        <div className="inline-block text-sm sm:text-base ml-2 sm:ml-0">
          <Link
            href={"/page/term_and_conditions"}
            className="inline-block hover:underline text-[#1677ff]"
            target="_blank"
          >
            Điều khoản
          </Link>{" "}
          và{" "}
          <Link
            href={"/page/privacy_policy"}
            className="inline-block hover:underline text-[#1677ff]"
            target="_blank"
          >
            chính sách quyền riêng tư
          </Link>
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
