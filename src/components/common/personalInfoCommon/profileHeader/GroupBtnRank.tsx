"use client";

import { RANK } from "../constants";
import style from "../style.module.scss";

const POINT_BLUE = 1;
const POINT_RED = 2;

const GroupBtnRank = ({ active, setActive, dataRankPointId }) => {
  const getStyle = (value: number) => {
    if (active === value) {
      return dataRankPointId === POINT_BLUE
        ? style.btnRankActivePointBlue
        : dataRankPointId === POINT_RED
        ? style.btnRankActivePointRed
        : style.btnRankActive;
    } else {
      return style.btnRank;
    }
  };

  const onClick = (val) => {
    setActive(val);
  };

  return (
    <div key={dataRankPointId} className="flex w-fit mt-2">
      <div
        className={`${getStyle(
          RANK.DOUBLES
        )} flex justify-center items-center cursor-pointer hover:opacity-90 py-1`}
        onClick={() => onClick(RANK.DOUBLES)}
      >
        Đôi
      </div>
      <div
        className={`${getStyle(
          RANK.SINGLES
        )} flex justify-center items-center cursor-pointer hover:opacity-90 py-1`}
        onClick={() => onClick(RANK.SINGLES)}
      >
        Đơn
      </div>
    </div>
  );
};

export default GroupBtnRank;
