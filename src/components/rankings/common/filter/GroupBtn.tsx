import { Button } from "@nextui-org/react";
import { FaSearch, FaSyncAlt } from "react-icons/fa";

type IProp = {
  handleReset: () => void;
  handleSearch: () => void;
};

const GroupBtn = ({ handleReset, handleSearch }: IProp) => {
  return (
    <div className="flex gap-4 items-center">
      <Button
        startContent={<FaSearch />}
        size="md"
        className="bg-green-common text-white"
        onClick={handleSearch}
      >
        Tìm kiếm
      </Button>
      <Button
        startContent={<FaSyncAlt />}
        size="md"
        className="bg-[#C3C4C9]"
        onClick={handleReset}
      >
        Làm mới
      </Button>
    </div>
  );
};

export default GroupBtn;
