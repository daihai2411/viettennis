import { ROUTERS } from "@/const/router";
import { getColorCell } from "@/helpers/common";
import { checkEmptyVal, formatVal } from "@/helpers/value";
import { User } from "@nextui-org/react";
import Link from "next/link";

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
          --
        </div>
      );
    case "name":
      return (
        <Link
          className="cursor-pointer"
          href={ROUTERS.PLAYERS + "/" + user.new_user_id}
        >
          <User
            name={<div className="text-neutral-500 uppercase">{user.name}</div>}
            description={"@" + user.username}
            avatarProps={{
              src: user.avatar,
            }}
          />
        </Link>
      );
    case "group_name":
      return (
        <div className="text-center flex justify-center text-neutral-500 font-medium text-md">
          {checkEmptyVal(cellValue)}
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
