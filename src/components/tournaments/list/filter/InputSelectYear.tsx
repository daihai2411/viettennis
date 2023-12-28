"use client";

import { Button } from "@nextui-org/react";
import { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";

const InputSelectYear = () => {
  const [startDate, setStartDate] = useState(new Date());

  // eslint-disable-next-line react/display-name
  const ExampleCustomInput = forwardRef(({ value, onClick }: any, ref) => (
    <Button className="example-custom-input" onClick={onClick}>
      {value}
    </Button>
  ));

  return (
    <>
      <DatePicker
        customInput={<ExampleCustomInput />}
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        showYearPicker
        dateFormat="yyyy"
      />
    </>
  );
};

export default InputSelectYear;
