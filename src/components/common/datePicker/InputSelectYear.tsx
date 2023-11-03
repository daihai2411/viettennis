import { useState } from "react";
import DatePicker from "react-datepicker";

const InputSelectYear = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      {/* <div className="rankings-filter__content js-filter-trigger js-filter-disable">
        <span className="rankings-filter__label">Filter by Date</span>
        <div className="rankings-filter__value "> */}
      <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        showYearPicker
        dateFormat="yyyy"
      />
      {/* </div>
      </div> */}
    </>
  );
};

export default InputSelectYear;
