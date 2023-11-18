import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDistricts,
  selectLoadingDistricts,
  selectLoadingProvinces,
  selectLoadingWards,
  selectProvinces,
  selectWards,
} from "./store/slice";
import { getProvincesThunk } from "./store/thunk";

const useAddress = () => {
  const dispatch = useDispatch<AppDispatch>();

  const dataProvinces = useSelector(selectProvinces);
  const dataDistricts = useSelector(selectDistricts);
  const dataWards = useSelector(selectWards);
  const loadingProvinces = useSelector(selectLoadingProvinces);
  const loadingDistricts = useSelector(selectLoadingDistricts);
  const loadingWards = useSelector(selectLoadingWards);

  useEffect(() => {
    dispatch(getProvincesThunk());
  }, []);

  return {
    dataProvinces,
    loadingProvinces,
    dataDistricts,
    loadingDistricts,
    dataWards,
    loadingWards,
  };
};

export default useAddress;
