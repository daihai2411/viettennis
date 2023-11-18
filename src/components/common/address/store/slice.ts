import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { districts, provinces, wards } from "../dummy";
import { getDistrictsThunk, getProvincesThunk, getWardsThunk } from "./thunk";

const initialState = {
  dataProvinces: provinces || [],
  dataDistricts: districts || [],
  dataWards: wards || [],
  loadingProvinces: false,
  loadingDistricts: false,
  loadingWards: false,
};

const slice = createSlice({
  name: "common/address",
  initialState,
  reducers: {
    resetStore: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getProvincesThunk.pending, (state) => {
      state.loadingProvinces = true;
    });
    builder.addCase(getProvincesThunk.fulfilled, (state, action) => {
      state.dataProvinces = action.payload as any;
      state.loadingProvinces = false;
    });
    builder.addCase(getProvincesThunk.rejected, (state) => {
      state.loadingProvinces = false;
    });

    builder.addCase(getDistrictsThunk.pending, (state) => {
      state.dataDistricts = [];
      state.loadingDistricts = true;
    });
    builder.addCase(getDistrictsThunk.fulfilled, (state, action) => {
      state.dataDistricts = action.payload as any;
      state.loadingDistricts = false;
    });
    builder.addCase(getDistrictsThunk.rejected, (state) => {
      state.loadingDistricts = false;
    });

    builder.addCase(getWardsThunk.pending, (state) => {
      state.dataWards = [];
      state.loadingWards = true;
    });
    builder.addCase(getWardsThunk.fulfilled, (state, action) => {
      state.loadingWards = true;
      state.dataWards = action.payload as any;
    });
    builder.addCase(getWardsThunk.rejected, (state) => {
      state.loadingWards = true;
    });
  },
});

export const selectProvinces = (state: RootState) =>
  state[slice.name]?.dataProvinces;
export const selectDistricts = (state: RootState) =>
  state[slice.name]?.dataDistricts;
export const selectWards = (state: RootState) => state[slice.name]?.dataWards;
export const selectLoadingProvinces = (state: RootState) =>
  state[slice.name]?.loadingProvinces;
export const selectLoadingDistricts = (state: RootState) =>
  state[slice.name]?.loadingDistricts;
export const selectLoadingWards = (state: RootState) =>
  state[slice.name]?.loadingWards;

reducerRegistry.register(slice.name, slice.reducer);
