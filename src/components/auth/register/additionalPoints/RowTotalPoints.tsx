import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectObjPoints } from "../../store/slice";

const RowTotalPoints = () => {
  const objPoint = useSelector(selectObjPoints);

  const total = useMemo(() => {
    return Object.values(objPoint).reduce(
      (accumulator, current) => Number(accumulator) + Number(current),
      0
    ) as number;
  }, [objPoint]);

  return (
    <div className="mb-6">
      <div className="grid grid-cols-10 gap-4">
        <div className="hidden sm:flex items-center text-small justify-center"></div>
        <div className="col-span-10 sm:col-span-4 flex items-center"></div>
        <div className="col-span-6 sm:col-span-3"></div>
        <div className="flex justify-end items-center col-span-2 sm:col-span-1 text-small">
          100%
        </div>
        <div className="flex justify-end items-center col-span-2 sm:col-span-1 text-small text-[#0555e4d9]">
          {total.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default RowTotalPoints;
