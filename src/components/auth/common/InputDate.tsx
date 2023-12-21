import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const InputDate = ({
  register,
  errors,
  keyInput,
  label,
  placeholder,
  setValue,
  clearErrors,
  defaultValue = undefined,
}) => {
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

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
        defaultValue={defaultValue}
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
    clearErrors(keyInput);
  };

  useEffect(() => {
    if (defaultValue) {
      onChange(new Date(defaultValue));
    }
  }, [defaultValue]);

  return (
    <>
      <DatePicker
        customInput={<ExampleCustomInput />}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="flex gap-2 px-2">
            <Button
              className="text-black border border-gray-100 px-0 bg-white mb-1 w-7 min-w-7 h-7 text-base rounded-full"
              onClick={(e) => {
                e.preventDefault();
                decreaseMonth();
              }}
              disabled={prevMonthButtonDisabled}
            >
              <FaAngleLeft />
            </Button>
            <select
              className="rounded"
              value={months[date.getMonth()]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <input
              type="number"
              onChange={({ target: { value } }) => changeYear(Number(value))}
              value={date.getFullYear()}
              className="max-w-[70px] pl-2 rounded"
            />
            <Button
              className="text-black border border-gray-100 px-0 bg-white mb-1 w-7 min-w-7 h-7 text-base rounded-full"
              onClick={(e) => {
                e.preventDefault();
                increaseMonth();
              }}
              disabled={nextMonthButtonDisabled}
            >
              <FaAngleRight />
            </Button>
          </div>
        )}
        className="form-control"
        wrapperClassName="!block"
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={onChange}
        maxDate={new Date()}
      />
    </>
  );
};

export default InputDate;
