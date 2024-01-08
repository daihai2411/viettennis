import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectFilterTournament, selectLoadingFilter } from "../store/slice";

const SelectYear = () => {
  const loading = useSelector(selectLoadingFilter);
  const data = useSelector(selectFilterTournament);

  const getList = useMemo(() => {
    if (data.years) {
      return data.years.map((item) => ({
        value: item.value,
        label: item.value.toString(),
      }));
    }
    return [];
  }, [data.years]);

  if (data.years)
    return (
      <>
        <Autocomplete
          variant="underlined"
          placeholder="Chọn năm"
          isLoading={loading}
          className="max-w-[140px]"
          labelPlacement="outside-left"
        >
          {getList.map((item) => (
            <AutocompleteItem key={item.value} value={item.value}>
              {item.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
      </>
    );

  return null;
};

export default SelectYear;
