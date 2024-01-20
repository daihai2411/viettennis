import { parseDMY } from "@/helpers/value";
import {
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import moment from "moment";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const InputSelectDate = ({
  register,
  errors,
  keyInput,
  label,
  placeholder,
  setValue,
  clearErrors,
  defaultValue = undefined,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dateState, setDateState] = useState(parseDMY(defaultValue));

  const changeDate = (e) => {
    setDateState(e);
    setValue(keyInput, moment(e).format("DD/MM/YYYY"));
    setIsOpen(false);
    clearErrors(keyInput);
  };

  const content = (
    <PopoverContent className="py-[10px]">
      <Calendar
        className="!w-64 sm:!w-80"
        value={dateState}
        onChange={changeDate}
        maxDate={new Date()}
        locale="vi"
      />
    </PopoverContent>
  );

  return (
    <>
      <Popover
        isOpen={isOpen}
        onOpenChange={(open) => setIsOpen(open)}
        placement="bottom-start"
      >
        <PopoverTrigger>
          <div className="mb-4">
            <div className="text-small font-medium text-foreground">
              {label}
            </div>
            <Input
              value={dateState ? moment(dateState).format("DD/MM/YYYY") : ""}
              {...register(keyInput)}
              placeholder={placeholder}
              variant="bordered"
              labelPlacement="outside"
              classNames={{ input: "!flex" }}
              className="cursor-pointer"
              defaultValue={defaultValue}
              readOnly
            />
            {errors[keyInput] && (
              <p className="text-red-500 text-xs" role="alert">
                {errors[keyInput]?.message as string}
              </p>
            )}
          </div>
        </PopoverTrigger>
        {content}
      </Popover>
    </>
  );
};

export default InputSelectDate;
