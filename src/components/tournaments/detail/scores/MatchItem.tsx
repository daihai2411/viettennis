import { Image } from "@nextui-org/react";
import style from "./matchItem.module.css";

const MatchItem = () => {
  return (
    <div className="md:mb-4 mb-0">
      <div className="bg-[#E6E6E6] flex justify-between p-2">
        <div className="text-sm text-[#0A0A0A] font-bold">Completed</div>
        <div className="text-xs font-normal">Round of 16</div>
      </div>
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
      <div className="flex justify-end py-2 pr-2">
        <Image src="/sap.png" radius="none" alt="sap image" />
      </div>
    </div>
  );
};

export default MatchItem;
