"use client";

import { Button } from "@nextui-org/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const InputSelectDateTime = (props: any) => {
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

  return (
    <>
      <DatePicker
        customInput={
          <div className="h-[78px] cursor-pointer px-6">
            <div className="flex gap-4 items-center pt-5">
              <div className="items-center">
                <div className="opacity-90 text-neutral-950 text-xs font-bold">
                  Lọc theo ngày
                </div>
                <div className="text-neutral-800 text-[21px] font-black">
                  2023/10/09
                </div>
              </div>
              <FaAngleDown />
            </div>
          </div>
        }
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
        wrapperClassName={props.wrapperClassName}
        className="form-control"
        dateFormat="dd/MM/yyyy"
        selected={props.selected}
        onChange={props.onChange}
      />
    </>
  );
};

export default InputSelectDateTime;
