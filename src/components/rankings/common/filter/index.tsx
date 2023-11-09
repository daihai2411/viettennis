import { useState } from "react";
import FilterPoint from "./FilterPoint";
import GroupBtn from "./GroupBtn";
import InputSearch from "./InputSearch";
import SelectGroupType from "./SelectGroupType";
import SelectKindPoint from "./SelectKindPoint";

export type Params = {
  pointType?: string | undefined;
  groupId?: string | undefined;
  key?: string;
  min?: string | undefined;
  max?: string | undefined;
};

const Filter = ({
  changeParams,
  resetParams,
}: {
  changeParams: (object: object) => void;
  resetParams: () => void;
}) => {
  const [dataFilter, setDataFilter] = useState<object>({
    pointType: null,
    groupId: null,
    key: "",
    min: null,
    max: null,
  });

  const handleChangeFilter = (val: object) => {
    setDataFilter({ ...dataFilter, ...val });
  };

  const handleReset = () => {
    setDataFilter({});
    resetParams();
  };

  const handleSearch = () => {
    changeParams(dataFilter);
  };

  return (
    <>
      <div className="w-full bg-[#E6E6E6] h-[160px] lg:h-[79px]">
        <div className="container mx-auto flex h-full items-center justify-between">
          <div className="w-fit m-auto block lg:flex gap-5">
            <div className="flex gap-5 mb-2 lg:mb-0">
              <SelectKindPoint
                dataFilter={dataFilter}
                setDataFilter={handleChangeFilter}
              />
              <SelectGroupType
                dataFilter={dataFilter}
                setDataFilter={handleChangeFilter}
              />
              <InputSearch
                dataFilter={dataFilter}
                setDataFilter={handleChangeFilter}
              />
              <FilterPoint
                dataFilter={dataFilter}
                setDataFilter={handleChangeFilter}
              />
            </div>
            <GroupBtn handleReset={handleReset} handleSearch={handleSearch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
