import { Select, SelectItem } from "@nextui-org/react";
import { Params } from ".";
import useListFilterRankings from "../../useListFilterRankings";

const SelectKindPoint = ({
  dataFilter,
  setDataFilter,
}: {
  dataFilter: Params;
  setDataFilter: (val: object) => void;
}) => {
  const { loading, listPointType } = useListFilterRankings();

  const onChange = (val: any) => {
    setDataFilter({
      pointType: val.target.value,
    });
  };

  return (
    <>
      <Select
        value={dataFilter.pointType}
        variant="underlined"
        label="Lọc theo điểm"
        placeholder="Tất cả loại điểm"
        className="max-w-xs"
        onChange={onChange}
        isLoading={loading}
      >
        {listPointType.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};

SelectKindPoint.propTypes = {};

export default SelectKindPoint;
