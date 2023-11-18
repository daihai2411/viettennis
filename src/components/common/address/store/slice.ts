import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getDistrictsThunk, getProvincesThunk, getWardsThunk } from "./thunk";

const initialState = {
  dataProvinces: [],
  dataDistricts: [],
  dataWards: [],
  loadingProvinces: false,
  loadingDistricts: false,
  loadingWards: false,
};

const slice = createSlice({
  name: "common/address",
  initialState,
  reducers: {
    resetStore: () => initialState,
    resetDataDistricts: (state) => {
      state.dataDistricts = [];
    },
    resetDataWards: (state) => {
      state.dataWards = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProvincesThunk.pending, (state) => {
      state.loadingProvinces = true;
    });
    builder.addCase(getProvincesThunk.fulfilled, (state, action) => {
      state.dataProvinces = action.payload;
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
      state.dataDistricts = action.payload;
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
      state.loadingWards = false;
      state.dataWards = action.payload;
    });
    builder.addCase(getWardsThunk.rejected, (state) => {
      state.loadingWards = false;
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

export const { resetDataDistricts, resetDataWards } = slice.actions;

reducerRegistry.register(slice.name, slice.reducer);
