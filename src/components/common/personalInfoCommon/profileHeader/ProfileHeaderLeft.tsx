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

  console.log(data?.avatar);

  return (
    <div className={`${style.bgTwoColorHorizontal} w-full lg:w-[50%]`}>
      <div className="w-[636px] h-full grid grid-cols-7 text-white">
        <div className="col-span-2 flex justify-between flex-col">
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
          <div className=" border-[7px] relative border-white mt-[30%] mx-4 w-[260px] h-[300px]">
            <Image
              fill
              src={data?.avatar || "/empty.jpg"}
              alt="Avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default ProfileHeaderLeft;
