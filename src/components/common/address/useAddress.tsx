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
import {
  getDistrictsThunk,
  getProvincesThunk,
  getWardsThunk,
} from "./store/thunk";

const useAddress = ({ provinceCode = undefined, districtCode = undefined }) => {
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

  useEffect(() => {
    if (provinceCode) {
      dispatch(getDistrictsThunk({ province_code: provinceCode }));
    }
  }, [provinceCode]);

  useEffect(() => {
    if (provinceCode && districtCode) {
      dispatch(
        getWardsThunk({
          province_code: provinceCode,
          district_code: districtCode,
        })
      );
    }
  }, [provinceCode, districtCode]);

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
