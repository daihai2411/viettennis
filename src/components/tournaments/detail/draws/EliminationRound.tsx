import { useState } from "react";
import MatchList from "./matchDraw/MatchList";

const TABS = {
  ROUND_1: 1,
  PLAY_OFF: 2,
};

const EliminationRound = ({ listData }) => {
  const [tab, setTab] = useState(1);

  const onClick = (val) => {
    setTab(val);
  };

  const getStyle = (value: number) => {
    if (tab === value) {
      return "bg-green-common text-white";
    } else {
      return "bg-white text-green-common";
    }
  };

  if (listData && listData.length) {
    return (
      <div>
        <div className="hidden lg:flex justify-center gap-20">
          <div className="bg-[#e6e6e6] p-3 text-lg font-medium flex justify-center w-[460px] min-w-[460px]">
            {listData[0]?.round_name}
          </div>
          <div className="bg-[#e6e6e6] p-3 text-lg font-medium flex justify-center w-[460px] min-w-[460px]">
            {listData[1]?.round_name}
          </div>
        </div>
        <div className="hidden lg:flex gap-20 justify-center h-full">
          <MatchList listData={Object.values(listData[0]?.round_detail)} />
          <MatchList listData={Object.values(listData[1]?.round_detail)} />
        </div>
        <div className="lg:hidden h-full flex mx-auto justify-center mb-3 border-1.5 border-green-common w-full sm:w-[460px]">
          <div
            className={`${getStyle(
              TABS.ROUND_1
            )} flex justify-center items-center cursor-pointer hover:opacity-90 py-1 w-full font-bold`}
            onClick={() => onClick(TABS.ROUND_1)}
          >
            {listData[0]?.round_name}
          </div>
          <div
            className={`${getStyle(
              TABS.PLAY_OFF
            )} flex justify-center items-center cursor-pointer hover:opacity-90 py-1 w-full font-bold`}
            onClick={() => onClick(TABS.PLAY_OFF)}
          >
            {listData[1]?.round_name}
          </div>
        </div>
        <div className="lg:hidden h-full flex justify-center px-3">
          {tab === 1 ? (
            <MatchList listData={Object.values(listData[0]?.round_detail)} />
          ) : (
            <MatchList listData={Object.values(listData[1]?.round_detail)} />
          )}
        </div>
        {/* <div className="w-full sm:w-[460px] cursor-pointer flex justify-start">
        <MatchItemSpecial />
      </div> */}
      </div>
    );
  }

  return (
    <div className="flex justify-center">Không có dữ liệu sơ đồ thi đấu</div>
  );
};

export default EliminationRound;
