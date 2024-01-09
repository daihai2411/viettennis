import { useAppDispatch } from "@/redux/hooks";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { Fragment, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import {
  changeListFilter,
  selectFilterTournament,
  selectListFilter,
  selectLoadingFilter,
} from "../store/slice";

const SelectYear = ({ years, defaultYear }) => {
  const dispatch = useAppDispatch();

  const listFilter = useSelector(selectListFilter);

  const handleYear = (key) => {
    dispatch(changeListFilter({ ...listFilter, year: key || "" }));
  };

  useEffect(() => {
    if (defaultYear) {
      handleYear(defaultYear);
    }
  }, [defaultYear]);

  return (
    <Fragment key={defaultYear}>
      <Autocomplete
        variant="underlined"
        placeholder="Năm"
        className="max-w-[140px]"
        labelPlacement="outside-left"
        defaultItems={years}
        defaultSelectedKey={defaultYear}
        onSelectionChange={handleYear}
      >
        {(item: any) => (
          <AutocompleteItem key={item.value} value={item.value}>
            {item.label}
          </AutocompleteItem>
        )}
      </Autocomplete>
    </Fragment>
  );
};

const withData = (Component) => {
  const HocComponent = () => {
    const data = useSelector(selectFilterTournament);
    const loading = useSelector(selectLoadingFilter);

    const getYears = useMemo(() => {
      if (data.years) {
        return [...data.years]
          .sort((a, b) => a.value - b.value)
          .map((item) => ({
            value: item.value.toString(),
            label: item.value.toString(),
          }));
      }
      return [];
    }, [data.years]);

    if (loading) return null;

    return (
      <Component
        years={getYears}
        defaultYear={getYears[getYears.length - 1]?.value}
      />
    );
  };

  return HocComponent;
};

export default withData(SelectYear);
