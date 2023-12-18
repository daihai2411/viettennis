import { AppDispatch } from "@/redux/store";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDataFilter, selectLoading } from "./store/slice";
import { getListAllFilterRankingThunk } from "./store/thunk";

export const DEFAULT_SELECT = "0";

const useListFilterRankings = () => {
  const dispatch = useDispatch<AppDispatch>();

  const dataFilter = useSelector(selectDataFilter);
  const loading = useSelector(selectLoading);

  const listPointType = useMemo(() => {
    if (dataFilter.pointTypes.length) {
      const list = dataFilter.pointTypes.map(
        (item: { value: string; id: number }) => ({
          label: item.value,
          value: item.id,
        })
      );
      return [{ label: "Tất cả loại điểm", value: DEFAULT_SELECT }, ...list];
    } else {
      return [{ label: "Tất cả loại điểm", value: DEFAULT_SELECT }];
    }
  }, [dataFilter.pointTypes]);

  const listGroup = useMemo(() => {
    if (dataFilter.groups.length) {
      const list = dataFilter.groups.map(
        (item: { value: string; id: number }) => ({
          label: item.value,
          value: item.id,
        })
      );
      return [{ label: "Tất cả khu vực", value: DEFAULT_SELECT }, ...list];
    } else {
      return [{ label: "Tất cả khu vực", value: DEFAULT_SELECT }];
    }
  }, [dataFilter.groups]);

  useEffect(() => {
    dispatch(getListAllFilterRankingThunk({}));
  }, []);

  return {
    loading,
    listPointType,
    listGroup,
    sortBy: dataFilter.sortBy || [],
  };
};

export default useListFilterRankings;
