import { Input } from "@nextui-org/react";

type IProp = {
  dataFilter: any;
  setDataFilter: (val: object) => void;
  handleSearch: () => void;
};

const InputSearch = ({ dataFilter, setDataFilter, handleSearch }: IProp) => {
  const onChange = (e: any) => {
    setDataFilter({ key_search: e.target.value });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Input
      value={dataFilter.key_search}
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
