"use client";

import { Skeleton } from "@nextui-org/react";
import { useState } from "react";
import { RANK } from "../constants";
import style from "../style.module.scss";
import FollowAccount from "./FollowAccount";
import GroupBtnRank from "./GroupBtnRank";
import UploadImage from "./UploadImage";

const ProfileHeaderLeft = ({ data, loading, isUserLogged }) => {
  const [active, setActive] = useState(RANK.DOUBLES);

  return (
    <div
      className={`${style.bgTwoColorHorizontal} w-full md:w-[50%] h-[350px] md:h-full border-r-[0px] border-b-8 border-solid md:border-b-[0px] md:border-r-4 border-white`}
    >
      <div className="w-full lg:w-[636px] h-full grid grid-cols-7 text-white">
        <div className="lg:col-span-2 col-span-3 pl-4 flex justify-between flex-col">
          <div className="mt-6">
            <div className="text-lg leading-tight font-bold">Điểm</div>
            <Skeleton isLoaded={!loading}>
              <div className="text-5xl font-black">
                {active === RANK.DOUBLES
                  ? data?.double_point
                  : data?.single_point}
              </div>
            </Skeleton>
            <GroupBtnRank
              dataRankPointId={data?.rank_point_id}
              active={active}
              setActive={setActive}
            />
          </div>
          <div className="pb-6">
            <FollowAccount data={data} />
          </div>
        </div>
        <UploadImage avatar={data?.avatar} isUserLogged={isUserLogged} />
        <div className="col-span-1 lg:col-span-2"></div>
      </div>
    </div>
  );
};

export default ProfileHeaderLeft;
