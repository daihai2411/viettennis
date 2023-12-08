import { Input } from "@nextui-org/react";
import { Params } from ".";

type IProp = {
  dataFilter: Params;
  setDataFilter: (val: object) => void;
  handleSearch: () => void;
};

const InputSearch = ({ dataFilter, setDataFilter, handleSearch }: IProp) => {
  const onChange = (e: any) => {
    setDataFilter({ key: e.target.value });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Input
      value={dataFilter.key}
      type="text"
      variant="underlined"
      label="Tìm kiếm theo tên"
      placeholder="Nhập tên..."
      onChange={onChange}
      className="min-w-[120px]"
      onKeyDown={handleKeyDown}
    />
  );
};

export default InputSearch;
