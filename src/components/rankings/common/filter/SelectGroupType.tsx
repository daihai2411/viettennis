import { Select, SelectItem } from "@nextui-org/react";
import { Params } from ".";
import useListFilterRankings from "../../useListFilterRankings";

const SelectGroupType = ({
  dataFilter,
  setDataFilter,
}: {
  dataFilter: Params;
  setDataFilter: (val: object) => void;
}) => {
  const { loading, listGroup } = useListFilterRankings();

  const onChange = (val: any) => {
    setDataFilter({
      groupId: val.target.value,
    });
  };
  return (
    <>
      <Select
        value={dataFilter.groupId}
        variant="underlined"
        label="Lọc theo khu vực"
        placeholder="Tất cả loại khu vực"
        className="max-w-xs"
        onChange={onChange}
        isLoading={loading}
      >
        {listGroup.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};

SelectGroupType.propTypes = {};

export default SelectGroupType;
