"use client";

import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { RANK } from "../constants";
import style from "../style.module.scss";
import FollowAccount from "./FollowAccount";
import GroupBtnRank from "./GroupBtnRank";

const ProfileHeaderLeft = ({ data, loading }) => {
  const [active, setActive] = useState(RANK.DOUBLES);

  return (
    <div
      className={`${style.bgTwoColorHorizontal} w-full md:w-[50%] h-[350px] md:h-full border-r-[0px] border-b-8 border-solid md:border-b-[0px] md:border-r-4 border-white
      `}
    >
      <div className="w-full md:w-[636px] h-full grid grid-cols-7 text-white">
        <div className="lg:col-span-2 col-span-3 pl-4 flex justify-between flex-col">
          <div className="mt-4">
            <div className="text-lg leading-tight font-bold">Điểm</div>
            <Skeleton
              isLoaded={!loading}
              className="text-8xl leading-[79.68px] font-black"
            >
              {active === RANK.DOUBLES
                ? data?.double_point
                : data?.single_point}
            </Skeleton>
            <GroupBtnRank active={active} setActive={setActive} />
          </div>
          <div className="pb-6">
            <FollowAccount data={data} />
          </div>
        </div>
        <div className="col-span-3">
          <div className=" border-[7px] relative border-white mt-[48px] md:mt-[30%] mx-4 w-[180px] lg:w-[260px] h-[220px] lg:h-[300px]">
            <Image
              fill
              src={data?.avatar || "/empty.jpg"}
              alt="Avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2"></div>
      </div>
    </div>
  );
};

export default ProfileHeaderLeft;
