"use client";

import { RANK } from "../constants";
import style from "../style.module.scss";

const GroupBtnRank = ({ active, setActive }) => {
  const getStyle = (value: number) => {
    if (active === value) {
      return style.btnRankActive;
    } else {
      return style.btnRank;
    }
  };

  const onClick = (val) => {
    setActive(val);
  };

  return (
    <div className="flex border-1.5 border-white w-fit mt-2">
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
