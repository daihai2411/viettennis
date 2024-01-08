import { useAppDispatch } from "@/redux/hooks";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  changeListFilter,
  selectFilterTournament,
  selectListFilter,
  selectLoadingFilter,
} from "../store/slice";

const SelectYear = () => {
  const dispatch = useAppDispatch();

  const loading = useSelector(selectLoadingFilter);
  const data = useSelector(selectFilterTournament);
  const listFilter = useSelector(selectListFilter);

  const getList = useMemo(() => {
    if (data.years) {
      return data.years.map((item) => ({
        value: item.value,
        label: item.value.toString(),
      }));
    }
    return [];
  }, [data.years]);

  const handleYear = (key) => {
    dispatch(changeListFilter({ ...listFilter, year: key || "" }));
  };

  if (data.years)
    return (
      <>
        <Autocomplete
          variant="underlined"
          placeholder="Năm"
          isLoading={loading}
          className="max-w-[140px]"
          labelPlacement="outside-left"
          onSelectionChange={handleYear}
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
