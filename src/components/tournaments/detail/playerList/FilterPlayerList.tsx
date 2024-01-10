import { Button } from "@nextui-org/react";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosTennisball } from "react-icons/io";
import { STATUS_PLAYER } from "../../constants";

const list = [
  {
    title: "Tất cả",
    value: STATUS_PLAYER.ALL,
    startContent: <IoIosTennisball />,
  },
  {
    title: "Bị loại",
    value: STATUS_PLAYER.ELIMINATED,
    startContent: <AiOutlineClose />,
  },
  {
    title: "Đang chơi",
    value: STATUS_PLAYER.CURRENTLY,
    startContent: <IoIosTennisball />,
  },
  {
    title: "Còn lại",
    value: STATUS_PLAYER.OTHER,
    startContent: <IoIosTennisball />,
  },
];

const FilterPlayerList = ({ filterPlayer, setFilterPlayer }) => {
  return (
    <div className="flex justify-end gap-1 sm:gap-4 mb-3">
      {list.map((item) => (
        <Button
          size="sm"
          startContent={item.startContent}
          radius="full"
          className="font-semibold text-[#6e6e6e] gap-1 hover:text-white hover:bg-green-common2 text-xs sm:text-base"
          key={item.value}
          onClick={() => setFilterPlayer(item.value)}
          style={
            filterPlayer === item.value
              ? { backgroundColor: "#2DA46B", color: "white" }
              : {}
          }
        >
          {item.title}
        </Button>
      ))}
    </div>
  );
};

export default FilterPlayerList;
