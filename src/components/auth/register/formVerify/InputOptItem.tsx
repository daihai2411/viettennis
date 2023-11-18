import { useEffect, useRef, useState } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { keyCodes } from "../../constants";

type IProps = {
  index: number;
  isOnFocus: boolean;
  setFocusIndex: (index: number) => void;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
};

const MAX_LENGTH = 1;

export const InputOptItem: React.FC<IProps> = ({
  isOnFocus,
  index,
  setFocusIndex,
  register,
  setValue,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [newValue, setNewValue] = useState("");

  useEffect(() => {
    if (isOnFocus) {
      inputRef.current?.focus();
    }
  }, [isOnFocus]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const newValue =
      value.length > MAX_LENGTH ? value.slice(0, MAX_LENGTH) : value;

    if (newValue.length === MAX_LENGTH) {
      setFocusIndex(index + 1);
    }
    setNewValue(newValue);
    setValue("opt" + index, newValue);
  };

  const onClick = () => {
    setFocusIndex(index);
  };

  const onKeyDown = (e: any) => {
    if (e.keyCode === keyCodes.ARROW_LEFT) {
      setFocusIndex(index - 1);
    }

    if (e.keyCode === keyCodes.ARROW_RIGHT) {
      setFocusIndex(index + 1);
    }

    if (e.keyCode === keyCodes.DELETE) {
      e.preventDefault();
      setFocusIndex(index - 1);

      if (e.target.value) {
        setNewValue("");
        setValue("opt" + index, "");
      }
    }
  };

  return (
    <input
      type="text"
      {...register("opt" + index)}
      ref={inputRef}
      className="h-12 max-w-[60px] border border-[#d9d9d9] rounded-[4px] outline-none text-center"
      value={newValue}
      onChange={onChange}
      onClick={onClick}
      onKeyDown={onKeyDown}
    />
  );
};
