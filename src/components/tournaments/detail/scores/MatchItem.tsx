import { ROUTERS } from "@/const/router";
import { checkEmptyVal } from "@/helpers/value";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import style from "./matchItem.module.css";

const MatchItem = ({ item }) => {
  const redirectPage = (id) => {
    return ROUTERS.PLAYERS + "/" + id;
  };

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
            <tr>
              <th className="flex items-center justify-between">
                <div>
                  <Link
                    href={redirectPage(item?.game_detail[0]?.first_player?.id)}
                    className="flex items-center font-medium hover:underline hover:text-green-common"
                  >
                    {/* <Avatar
                    src={
                      item?.game_detail[0]?.first_player?.avatar ||
                      "/player.png"
                    }
                    className="w-6 h-6 text-tiny"
                  /> */}
                    {checkEmptyVal(
                      item?.game_detail[0]?.first_player?.full_name
                    )}
                  </Link>
                  <Link
                    href={redirectPage(item?.game_detail[0]?.second_player?.id)}
                    className="flex items-center font-medium hover:underline hover:text-green-common"
                  >
                    {checkEmptyVal(
                      item?.game_detail[0]?.second_player?.full_name
                    )}
                  </Link>
                </div>
                {item?.game_detail[0]?.is_win ? <FaCheck /> : null}
              </th>
              <td>{checkEmptyVal(item?.game_detail[0]?.game_set_one)}</td>
              <td>{checkEmptyVal(item?.game_detail[0]?.game_set_two)}</td>
              <td>{checkEmptyVal(item?.game_detail[0]?.game_set_three)}</td>
            </tr>
            <tr>
              <th className="flex items-center justify-between">
                <div>
                  <Link
                    href={redirectPage(item?.game_detail[1]?.second_player?.id)}
                    className="flex items-center font-medium hover:underline hover:text-green-common"
                  >
                    {checkEmptyVal(
                      item?.game_detail[1]?.first_player?.full_name
                    )}
                  </Link>
                  <Link
                    href={redirectPage(item?.game_detail[1]?.second_player?.id)}
                    className="flex items-center font-medium hover:underline hover:text-green-common"
                  >
                    {checkEmptyVal(
                      item?.game_detail[1]?.second_player?.full_name
                    )}
                  </Link>
                </div>
                {item?.game_detail[1]?.is_win ? <FaCheck /> : null}
              </th>
              <td>{checkEmptyVal(item?.game_detail[1]?.game_set_one)}</td>
              <td>{checkEmptyVal(item?.game_detail[1]?.game_set_two)}</td>
              <td>{checkEmptyVal(item?.game_detail[1]?.game_set_three)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-end py-2 pr-2">
        <Image src="/sap.png" radius="none" alt="sap image" />
      </div>
    </div>
  );
};

export default MatchItem;
