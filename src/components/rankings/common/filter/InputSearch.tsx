import { Input } from "@nextui-org/react";
import { Params } from ".";

type IProp = {
  dataFilter: Params;
  setDataFilter: (val: object) => void;
};

const InputSearch = ({ dataFilter, setDataFilter }: IProp) => {
  const onChange = (e: any) => {
    setDataFilter({ key: e.target.value });
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
    />
  );
};

export default InputSearch;
