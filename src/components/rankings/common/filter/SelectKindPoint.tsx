import { Select, SelectItem } from "@nextui-org/select";
import { Params } from ".";
import useListFilterRankings, {
  DEFAULT_SELECT,
} from "../../useListFilterRankings";

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
      pointType: val.target.value || DEFAULT_SELECT,
    });
  };

  return (
    <Select
      selectedKeys={[dataFilter.pointType]}
      variant="underlined"
      label="Lọc theo điểm"
      placeholder="Tất cả loại điểm"
      className="max-w-xs min-w-[140px]"
      onChange={onChange}
      isLoading={loading}
    >
      {listPointType.map((item) => (
        <SelectItem key={item.value} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
};

SelectKindPoint.propTypes = {};

export default SelectKindPoint;
