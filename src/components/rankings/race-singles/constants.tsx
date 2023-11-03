import { User } from "@nextui-org/react";

export const columns = [
  { name: "Rank", uid: "ranking" },
  { name: "Player", uid: "player" },
  { name: "Region", uid: "countryCode" },
  { name: "Age", uid: "age" },
  { name: "Tournaments Played", uid: "tournamentsPlayed" },
  { name: "Points", id: "points" },
];

export const renderCell = (user: any, columnKey: any) => {
  const cellValue = user[columnKey];
  switch (columnKey) {
    case "ranking":
      return (
        <div className="flex justify-start items-center gap-2">
          <div className="text-green-common text-[19px]">{cellValue}</div>
          <div className="text-center text-neutral-500 text-[19px]">-</div>
        </div>
      );
    case "player":
      return (
        <User
          name={
            <div className="justify-start items-start inline-flex gap-1">
              <div className="text-neutral-500 text-[21px] font-bold uppercase">
                {user.firstName}
              </div>
              <div className="text-neutral-950 text-[21px] font-bold uppercase">
                {user.lastName}
              </div>
            </div>
          }
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
        />
      );
    case "points":
      return (
        <div className="text-center flex justify-center text-green-common text-[21px] font-black">
          {cellValue}
        </div>
      );

    default:
      return (
        <div className="text-center flex justify-center text-neutral-500 text-[21px] font-black">
          {cellValue}
        </div>
      );
  }
};
