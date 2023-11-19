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
        <div className="col-span-8 sm:col-span-7"></div>
        <div className="flex justify-end items-center text-small">100%</div>
        <div className="flex justify-end items-center text-small">
          {total.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default RowTotalPoints;
