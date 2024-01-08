import { FaCalendarAlt } from "react-icons/fa";
import { MONTH } from "../constants";
import TournamentItem from "./TournamentItem";

const TournamentMonth = ({ dataMonth }) => {
  return (
    <div id={"month-" + Number(dataMonth?.month)} className="my-16">
      <div className="flex mb-8">
        <div className="h-14 w-20 bg-[#e6e6e6] mr-6 flex justify-center items-center">
          <FaCalendarAlt size={32} />
        </div>
        <div className="text-[38px] font-bold">{MONTH[dataMonth?.month]}</div>
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
