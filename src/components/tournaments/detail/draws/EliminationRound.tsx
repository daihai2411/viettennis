import { useState } from "react";
import MatchList from "./matchDraw/MatchList";

const TABS = {
  ROUND_1: 1,
  PLAY_OFF: 2,
};

const EliminationRound = () => {
  const [tab, setTab] = useState(1);

  const getArrayDummy = (number) => {
    return new Array(number).fill(null).map((item, index) => ({
      participants: [
        {
          id: "1d11ce35-de11-49de-b48e-cec5427eb82c",
          isWinner: true,
          name: "Alex" + index,
          resultText: "1",
          status: "PLAYED",
        },
        {
          id: "a504c49a-e9b2-4a2e-b4b8-a2c11651c356",
          isWinner: false,
          name: "BTC" + index,
          resultText: "0",
          status: "PLAYED",
        },
      ],
    }));
  };

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

  return (
    <div>
      <div className="hidden lg:flex justify-center gap-20">
        <div className="bg-[#e6e6e6] p-3 text-lg font-bold flex justify-center w-[460px] min-w-[460px]">
          Vòng 1
        </div>
        <div className="bg-[#e6e6e6] p-3 text-lg font-bold flex justify-center w-[460px] min-w-[460px]">
          Playoff
        </div>
      </div>
      <div className="hidden lg:flex gap-20 justify-center h-full">
        <MatchList listData={getArrayDummy(8)} />
        <MatchList listData={getArrayDummy(4)} />
      </div>
      <div className="lg:hidden h-full flex mx-auto justify-center mb-3 border-1.5 border-green-common w-full sm:w-[460px]">
        <div
          className={`${getStyle(
            TABS.ROUND_1
          )} flex justify-center items-center cursor-pointer hover:opacity-90 py-1 w-full font-bold`}
          onClick={() => onClick(TABS.ROUND_1)}
        >
          Vòng 1
        </div>
        <div
          className={`${getStyle(
            TABS.PLAY_OFF
          )} flex justify-center items-center cursor-pointer hover:opacity-90 py-1 w-full font-bold`}
          onClick={() => onClick(TABS.PLAY_OFF)}
        >
          Playoff
        </div>
      </div>
      <div className="lg:hidden h-full flex justify-center px-3">
        {tab === 1 ? (
          <MatchList listData={getArrayDummy(8)} />
        ) : (
          <MatchList listData={getArrayDummy(4)} />
        )}
      </div>
      {/* <div className="w-full sm:w-[460px] cursor-pointer flex justify-start">
        <MatchItemSpecial />
      </div> */}
    </div>
  );
};

export default EliminationRound;
