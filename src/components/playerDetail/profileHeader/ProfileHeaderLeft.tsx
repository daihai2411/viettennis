import { Image } from "@nextui-org/react";
import style from "../style.module.scss";
import FollowAccount from "./FollowAccount";
import GroupBtnRank from "./GroupBtnRank";

const ProfileHeaderLeft = () => {
  return (
    <div className={`${style.bgTwoColorHorizontal} w-full lg:w-[50%]`}>
      <div className="w-[636px] h-full grid grid-cols-7 text-white">
        <div className="col-span-2 flex justify-between flex-col">
          <div className="mt-4">
            <div className="text-lg leading-tight font-bold">RANK</div>
            <div className="text-8xl leading-[79.68px] font-black">10</div>
            <GroupBtnRank />
          </div>
          <div className="pb-6">
            <FollowAccount />
          </div>
        </div>
        <div className="col-span-3">
          <div className="border-[7px] border-white mt-[30%] mx-4">
            <Image
              alt="avatar"
              radius="none"
              src="https://picsum.photos/260/300"
            />
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default ProfileHeaderLeft;
