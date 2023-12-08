import { Input } from "@nextui-org/react";
import { Params } from ".";

type IProp = {
  dataFilter: Params;
  setDataFilter: (val: object) => void;
  handleSearch: () => void;
};

const FilterPoint = ({ dataFilter, setDataFilter, handleSearch }: IProp) => {
  const onChange = (e: any, key: string) => {
    setDataFilter({ [key]: e.target.value });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="py-2">
      <div className="block text-[#52525b] text-tiny cursor-text will-change-auto origin-top-left transition-all !duration-200 !ease-out motion-reduce:transition-none">
        Tìm kiếm theo điểm
      </div>
      <div className="flex gap-3">
        <Input
          value={dataFilter.min}
          variant="underlined"
          size="sm"
          className="w-24"
          placeholder="Tối thiểu"
          type="number"
          min={0}
          onChange={(e) => onChange(e, "min")}
          onKeyDown={handleKeyDown}
        />
        <Input
          value={dataFilter.max}
          variant="underlined"
          size="sm"
          className="w-24"
          placeholder="Tối đa"
          type="number"
          min={0}
          onChange={(e) => onChange(e, "max")}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default FilterPoint;
