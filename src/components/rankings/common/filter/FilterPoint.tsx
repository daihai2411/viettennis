import { Input } from "@nextui-org/react";
import { Params } from ".";

type IProp = {
  dataFilter: Params;
  setDataFilter: (val: object) => void;
};

const FilterPoint = ({ dataFilter, setDataFilter }: IProp) => {
  const onChange = (e: any, key: string) => {
    setDataFilter({ [key]: e.target.value });
  };

  return (
    <div className="py-2">
      <div className="block font-medium text-foreground-600 text-tiny cursor-text will-change-auto origin-top-left transition-all !duration-200 !ease-out motion-reduce:transition-none">
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
        />
      </div>
    </div>
  );
};

export default FilterPoint;
