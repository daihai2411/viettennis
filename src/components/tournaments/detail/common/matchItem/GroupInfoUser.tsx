import { checkEmptyVal } from "@/helpers/value";
import { useMemo } from "react";
import { FaCheck } from "react-icons/fa6";
import InfoUser from "./InfoUser";
import style from "./style.module.scss";

const GroupInfoUser = ({
  data,
  changeMatchDrawActive = (val) => {},
  matchDrawActive = null,
  matchDrawSearch = null,
}) => {
  const isActive = useMemo(() => {
    return (
      (matchDrawActive && matchDrawActive === data?.couple_id) ||
      (matchDrawSearch && matchDrawSearch === data?.couple_id)
    );
  }, [matchDrawActive, data?.couple_id, matchDrawSearch]);

  return (
    <tr
      onMouseEnter={() => changeMatchDrawActive(data?.couple_id)}
      onMouseLeave={() => changeMatchDrawActive(null)}
      className={isActive ? style.matchDrawActive : ""}
    >
      <th
        style={{ borderColor: data?.is_win ? "#00bc59" : "#141414" }}
        className="flex border-l-4 border-solid items-center justify-between"
      >
        <div>
          <InfoUser data={data?.first_player} />
          <InfoUser data={data?.second_player} />
        </div>
        {data?.is_win ? (
          <FaCheck className={isActive ? "text-white" : "text-green-common"} />
        ) : null}
      </th>
      <td>{checkEmptyVal(data?.game_set_one)}</td>
      <td>{checkEmptyVal(data?.game_set_two)}</td>
      <td>{checkEmptyVal(data?.game_set_three)}</td>
    </tr>
  );
};

export default GroupInfoUser;
