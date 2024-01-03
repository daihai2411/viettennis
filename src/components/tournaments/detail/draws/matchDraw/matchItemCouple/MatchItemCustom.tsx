import { ROUTERS } from "@/const/router";
import { checkEmptyVal } from "@/helpers/value";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import style from "./matchItemCustom.module.css";

const MatchItemCustom = ({ item }) => {
  const redirectPage = (id) => {
    return ROUTERS.PLAYERS + "/" + id;
  };

  return (
    <>
      <div className={style.tournament_drawMatchTable}>
        {item?.is_game_triple ? (
          <div className="text-[#BE0228] font-medium pl-[6px] text-sm">BO3</div>
        ) : null}
        <table className={style.matchTable}>
          <tbody>
            <tr>
              <th className="flex items-center justify-between">
                <div>
                  <Link
                    href={redirectPage(item?.game_detail[0]?.first_player?.id)}
                    className="flex items-center font-medium hover:underline hover:text-green-common"
                  >
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
    </>
  );
};

export default MatchItemCustom;
