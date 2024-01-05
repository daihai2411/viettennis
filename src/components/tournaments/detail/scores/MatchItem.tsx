import { Image } from "@nextui-org/react";
import GroupInfoUser from "../common/matchItem/GroupInfoUser";
import style from "./matchItem.module.css";

const MatchItem = ({ item }) => {
  return (
    <div className="md:mb-4 mb-0">
      <div className="bg-[#E6E6E6] flex justify-between p-2">
        <div className="text-sm text-[#0A0A0A] font-bold">
          {item.is_completed ? "Hoàn thành" : "Chưa diễn ra"}
        </div>
        {/* <div className="text-xs font-normal">Round of 16</div> */}
      </div>
      <div className={style.tournament_drawMatchTable}>
        <table className={style.matchTable}>
          <tbody>
            <GroupInfoUser data={item?.game_detail[0]} />
            <GroupInfoUser data={item?.game_detail[1]} />
          </tbody>
        </table>
      </div>
      <div className="flex gap-1 items-center justify-end py-2 pr-3">
        <Image
          src="/logo-no-content.svg"
          height={13}
          width={28}
          radius="none"
          alt="vtn image"
        />
        <div className="text-neutral-500 text-[8.44px] font-normal uppercase leading-[9.90px]">
          Match Stats
        </div>
      </div>
    </div>
  );
};

export default MatchItem;
