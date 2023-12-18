import { Select, SelectItem } from "@nextui-org/react";
import { Params } from ".";
import useListFilterRankings, {
  DEFAULT_SELECT,
} from "../../useListFilterRankings";

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
      rankGroupId: val.target.value || DEFAULT_SELECT,
    });
  };

  return (
    <Select
      selectedKeys={[dataFilter.rankGroupId]}
      variant="underlined"
      label="Lọc theo khu vực"
      placeholder="Tất cả loại khu vực"
      className="max-w-xs min-w-[180px]"
      onChange={onChange}
      isLoading={loading}
    >
      {listGroup.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};

SelectGroupType.propTypes = {};

export default SelectGroupType;
