import { FORMAT, formatDateTime } from "@/helpers/datetime";
import { useAppSelector } from "@/redux/hooks";
import moment from "moment";
import { useEffect, useRef } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import TournamentItem from "./TournamentItem";
import { changeMonthActive, selectListFilter } from "./store/slice";

const TournamentMonth = ({ dataMonth }) => {
  const ref = useRef<any>();
  const dispatch = useDispatch();

  const listFilter = useAppSelector(selectListFilter);

  const elementId = "month-" + Number(dataMonth?.month);

  const getMonthYear = (month) => {
    const date = moment().set("month", month - 1);

    if (listFilter.year) {
      date.set("year", listFilter.year);
    }

    return formatDateTime(date.toString(), FORMAT.MONTH_YEAR_TEXT);
  };

  useEffect(() => {
    const onScroll = () => {
      const filterEl = document.getElementById("tournament-filter");
      if (ref.current && filterEl) {
        const { top } = ref.current.getBoundingClientRect();
        const { bottom } = filterEl.getBoundingClientRect();

        if (top <= bottom + 100) {
          dispatch(changeMonthActive(elementId));
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [ref.current]);

  return (
    <div ref={ref} id={elementId} className="my-16">
      <div className="flex mb-8">
        <div className="h-14 w-20 bg-[#e6e6e6] mr-6 flex justify-center items-center">
          <FaCalendarAlt size={32} />
        </div>
        <div className="text-[38px] font-bold capitalize">
          {getMonthYear(dataMonth?.month)}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 pb-5">
        {dataMonth?.data
          ? dataMonth?.data.map((item) => (
              <>
                <TournamentItem data={item} />
              </>
            ))
          : null}
      </div>
    </div>
  );
};

export default TournamentMonth;
