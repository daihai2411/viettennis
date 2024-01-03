import style from "./matchItem.module.css";

const MatchItem = () => {
  return (
    <div className={style.tournament_drawMatchTable}>
      <table className={style.matchTable}>
        <tbody>
          <tr>
            <th>
              <div className="flex items-center"> Tên</div>
            </th>
            <td>6</td>
            <td>8</td>
            <td>3</td>
          </tr>
          <tr>
            <th>
              <div className="flex items-center"> Tên ewer</div>
            </th>
            <td>26</td>
            <td>8</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MatchItem;
