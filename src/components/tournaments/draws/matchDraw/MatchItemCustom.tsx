import style from "./matchItemCustom.module.css";

const MatchItemCustom = ({ participants }) => {
  return (
    <div className={style.tournament_drawMatchTable}>
      <table className={style.matchTable}>
        <tbody>
          <tr>
            <th>
              <div className="flex items-center">{participants[0]?.name}</div>
            </th>
            <td>6</td>
            <td>8</td>
            <td>3</td>
          </tr>
          <tr>
            <th>
              <div className="flex items-center">{participants[1]?.name}</div>
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

export default MatchItemCustom;
