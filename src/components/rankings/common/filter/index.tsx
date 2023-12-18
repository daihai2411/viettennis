import { useState } from "react";
import { DEFAULT_SELECT } from "../../useListFilterRankings";
import FilterPoint from "./FilterPoint";
import GroupBtn from "./GroupBtn";
import InputSearch from "./InputSearch";
import SelectGroupType from "./SelectGroupType";
import SelectKindPoint from "./SelectKindPoint";

export type Params = {
  rankPointId: any;
  rankGroupId: any;
  key: string;
  min: string;
  max: string;
};

const paramsInit = {
  rankPointId: DEFAULT_SELECT,
  rankGroupId: DEFAULT_SELECT,
  key: "",
  min: "",
  max: "",
};

const Filter = ({
  changeParams,
  resetParams,
}: {
  changeParams: (object: object) => void;
  resetParams: () => void;
}) => {
  const [dataFilter, setDataFilter] = useState<Params>(paramsInit);

  const handleChangeFilter = (val: object) => {
    setDataFilter({ ...dataFilter, ...val });
  };

  const handleReset = () => {
    setDataFilter(paramsInit);
    resetParams();
  };

  const handleSearch = () => {
    changeParams(dataFilter);
  };

  return (
    <>
      <div className="w-full bg-[#E6E6E6]  h-[190px] md:h-[150px] lg:h-[79px]">
        <div className="container mx-auto flex h-full items-center justify-between">
          <div className="w-fit m-auto block lg:flex gap-3 sm:gap-5">
            <div className="block md:flex gap-3 md:gap-5 mb-2 lg:mb-0">
              <div className="flex gap-3 sm:gap-5">
                <SelectKindPoint
                  dataFilter={dataFilter}
                  setDataFilter={handleChangeFilter}
                />
                <SelectGroupType
                  dataFilter={dataFilter}
                  setDataFilter={handleChangeFilter}
                />
              </div>
              <div className="flex gap-3 sm:gap-5">
                <InputSearch
                  dataFilter={dataFilter}
                  setDataFilter={handleChangeFilter}
                  handleSearch={handleSearch}
                />
                <FilterPoint
                  dataFilter={dataFilter}
                  setDataFilter={handleChangeFilter}
                  handleSearch={handleSearch}
                />
              </div>
            </div>
            <GroupBtn handleReset={handleReset} handleSearch={handleSearch} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
