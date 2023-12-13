import { Input } from "@nextui-org/input";

import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputYear = ({
  register,
  errors,
  keyInput,
  label,
  placeholder,
  setValue,
}) => {
  const [startDate, setStartDate] = useState<any>(undefined);

  // eslint-disable-next-line react/display-name
  const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref) => (
    <div className={"mb-4"}>
      <div className="text-small font-medium text-foreground">{label}</div>
      <Input
        ref={ref}
        value={value}
        {...register(keyInput)}
        placeholder={placeholder}
        variant="bordered"
        labelPlacement="outside"
        onClick={onClick}
      />
      {errors[keyInput] && (
        <p className="text-red-500 text-xs" role="alert">
          {errors[keyInput]?.message as string}
        </p>
      )}
    </div>
  ));

  const onChange = (date) => {
    setValue(keyInput, date);
    setStartDate(date);
  };

  return (
    <DatePicker
      customInput={<ExampleCustomInput />}
      selected={startDate}
      onChange={onChange}
      showYearPicker
      dateFormat="yyyy"
      className="form-control"
      wrapperClassName="!block"
      maxDate={new Date()}
    />
  );
};

export default InputYear;
