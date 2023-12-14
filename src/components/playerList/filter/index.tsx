import { Button } from "@nextui-org/react";
import { useState } from "react";
import { FaSearch, FaSyncAlt } from "react-icons/fa";
import InputSearch from "./InputSearch";

const Filter = ({
  changeParams,
  resetParams,
}: {
  changeParams: (object: object) => void;
  resetParams: () => void;
}) => {
  const [dataFilter, setDataFilter] = useState({});

  const handleChangeFilter = (val: object) => {
    setDataFilter({ ...dataFilter, ...val });
  };

  const handleReset = () => {
    setDataFilter({ page: 1, key_search: "" });
    resetParams();
  };

  const handleSearch = () => {
    changeParams(dataFilter);
  };

  return (
    <div className="w-full bg-[#E6E6E6] h-[79px]">
      <div className="container mx-auto flex h-full items-center justify-end">
        <div className="w-fit flex gap-3 pr-2">
          <div className="flex gap-3">
            <InputSearch
              dataFilter={dataFilter}
              setDataFilter={handleChangeFilter}
              handleSearch={handleSearch}
            />
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Filter;
