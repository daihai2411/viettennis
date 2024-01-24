import { Tooltip } from "@nextui-org/react";
import { useMemo } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectObjPoints } from "../../store/slice";

const RowTotalPoints = () => {
  const objPoint = useSelector(selectObjPoints);

  function roundExcel(number, numDigits) {
    let divisor = Math.pow(10, numDigits);
    let roundedNumber = Math.round(number * divisor) / divisor;
    return roundedNumber;
  }

  const total = useMemo(() => {
    return Object.values(objPoint).reduce(
      (accumulator, current) => Number(accumulator) + Number(current),
      0
    ) as number;
  }, [objPoint]);

  return (
    <div className="mb-6">
      <div className="sm:grid grid-cols-10 gap-4 hidden">
        <div className="flex justify-end items-center"></div>
        <div className="col-span-4 sm:col-span-5">
          <div className="text-base flex items-center gap-1">
            Điểm xanh
            <Tooltip
              content={
                <div>
                  Điểm xanh sẽ được cập nhật lên điểm đỏ <br /> sau các giải đấu
                </div>
              }
            >
              <div className="">
                <FaInfoCircle
                  size={12}
                  className="text-default-700 cursor-pointer"
                />
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="flex justify-end items-center col-span-6 sm:col-span-4 text-2xl font-black text-[#0555e4d9]">
          {roundExcel(total, -1)}
        </div>
      </div>
      <div className="sm:hidden flex justify-between">
        <div className="">
          <div className="text-base flex items-center gap-1">
            Điểm xanh
            <Tooltip
              content={
                <div>
                  Điểm xanh sẽ được cập nhật lên điểm đỏ <br /> sau các giải đấu
                </div>
              }
            >
              <div className="">
                <FaInfoCircle
                  size={12}
                  className="text-default-700 cursor-pointer"
                />
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="flex justify-end items-center col-span-6 sm:col-span-4 text-2xl font-black text-[#0555e4d9]">
          {roundExcel(total, -1)}
        </div>
      </div>
    </div>
  );
};

export default RowTotalPoints;
