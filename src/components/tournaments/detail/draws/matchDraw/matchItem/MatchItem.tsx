import { useSelector } from "react-redux";
import GroupInfoUser from "../../../common/matchItem/GroupInfoUser";
import { selectMatchDrawActive } from "../../slice";
import style from "./matchItem.module.css";

const MatchItem = ({ item, changeMatchDrawActive }) => {
  const matchDrawActive = useSelector(selectMatchDrawActive);

  if (item?.is_go_straight_ahead) {
    return (
      <div
        className={style.tournament_drawMatchTable}
        style={{ padding: "28px 0px" }}
      >
        <table className={style.matchTable}>
          <tbody>
            <GroupInfoUser
            matchDrawActive={matchDrawActive}
              changeMatchDrawActive={changeMatchDrawActive}
              data={item?.game_detail[0]}
            />
          </tbody>
        </table>
        {item?.is_go_straight_ahead ? (
          <div className="text-[#3E3E3E] text-xs font-normal pl-[6px]">
            Vào thẳng tứ kết
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      style={item?.is_game_triple ? { marginTop: 0, marginBottom: 12 } : {}}
      className={style.tournament_drawMatchTable}
    >
      {item?.is_game_triple ? (
        <div className="text-[#BE0228] font-medium pl-[6px] text-sm">BO3</div>
      ) : null}
      <table className={style.matchTable}>
        <tbody>
          <GroupInfoUser
          matchDrawActive={matchDrawActive}
            changeMatchDrawActive={changeMatchDrawActive}
            data={item?.game_detail[0]}
          />
          <GroupInfoUser
          matchDrawActive={matchDrawActive}
            changeMatchDrawActive={changeMatchDrawActive}
            data={item?.game_detail[1]}
          />
        </tbody>
      </table>
    </div>
  );
};

export default MatchItem;
