import { formatVal } from "@/helpers/value";
import { User } from "@nextui-org/react";
import { getColorCell } from "../helper";

export const columns = [
  { name: "Thứ hạng", uid: "id" },
  { name: "Người chơi ", uid: "name" },
  { name: "Khu vực", uid: "group_name" },
  { name: "Tuổi", uid: "year_old" },
  { name: "Các giải đấu đã chơi", uid: "tournaments_played" },
  { name: "Điểm", id: "point_vtr" },
];

export const renderCell = (user: any, columnKey: any) => {
  const cellValue = user[columnKey];
  switch (columnKey) {
    case "id":
      return (
        <div className="text-center flex justify-center text-green-common text-[19px]">
          {cellValue}
        </div>
      );
    case "name":
      return (
        <User
          name={<div className="text-neutral-500 uppercase">{user.name}</div>}
          description={"@" + user.username}
          avatarProps={{
            src: user.avatar,
          }}
        />
      );
    case "group_name":
      return (
        <div className="text-center flex justify-center text-neutral-500 font-medium text-md">
          {cellValue}
        </div>
      );
    case "point_vtr":
      return (
        <div
          style={{ color: getColorCell(user.rank_point_id) }}
          className="text-center flex justify-center font-medium text-lg"
        >
          {formatVal(cellValue)}
        </div>
      );

    default:
      return (
        <div className="text-center flex justify-center text-neutral-500 font-medium text-lg">
          {cellValue}
        </div>
      );
  }
};
