import { Select, SelectItem } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { selectFilterTournament, selectLoadingFilter } from "../store/slice";

const SelectYear = () => {
  const loading = useSelector(selectLoadingFilter);
  const data = useSelector(selectFilterTournament);

  if (data.years)
    return (
      <>
        <Select
          variant="underlined"
          label=""
          placeholder="Chọn năm"
          className="max-w-[110px]"
          isLoading={loading}
        >
          {data.years.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.value}
            </SelectItem>
          ))}
        </Select>
      </>
    );

  return null;
};

export default SelectYear;
