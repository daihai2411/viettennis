import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectMonthActive } from "../store/slice";
import style from "./style.module.scss";

const MonthComponent = () => {
  const monthActive = useSelector(selectMonthActive);

  const month = useMemo(() => {
    return new Array(12).fill(null).map((_, index) => ({
      id: index + 1,
      title: "Tháng " + (index + 1),
      titleShort: "Th " + (index + 1),
      active: "month-" + (index + 1),
    }));
  }, []);

  const monthCurrent = `month-${new Date().getMonth() + 1}`;

  return (
    <div className="flex item-center overflow-x-auto">
      {month.map((item) => (
        <Link
          data-to-scrollspy-id={item.active}
          key={item.id}
          href={"#" + item.active}
          className={`${style.filterMonthBtn} ${
            monthActive === item.active
              ? "bg-green-common text-white"
              : "hover:bg-white"
          } ${
            monthCurrent === item.active
              ? "!border-green-common !border-2 hover:bg-green-common"
              : ""
          }`}
        >
          <span
            className={`hidden whitespace-nowrap leading-[23px] lg:block ${style.monthLong}`}
          >
            {item.title}
          </span>
          <span
            className={`lg:hidden whitespace-nowrap leading-[23px] block ${style.monthShort}`}
          >
            {item.titleShort}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default MonthComponent;
