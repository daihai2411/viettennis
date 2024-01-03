import Link from "next/link";
import { useMemo } from "react";
import SelectYear from "./SelectYear";
import style from "./style.module.scss";

const MonthComponent = () => {
  const month = useMemo(() => {
    return new Array(12).fill(null).map((_, index) => ({
      id: index + 1,
      title: "Tháng " + (index + 1),
      titleShort: "Th " + (index + 1),
      active: "#month-" + (index + 1),
    }));
  }, []);

  const monthActive = "#month-10";
  const monthCurrent = "#month-12";

  return (
    <div className="flex gap-4 items-center">
      <SelectYear />
      <div className="flex item-center overflow-x-auto">
        {month.map((item) => (
          <Link
            key={item.id}
            href={item.active}
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
              className={`hidden whitespace-nowrap leading-[23px] md:block ${style.monthLong}`}
            >
              {item.title}
            </span>
            <span
              className={`md:hidden whitespace-nowrap leading-[23px] block ${style.monthShort}`}
            >
              {item.titleShort}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MonthComponent;
