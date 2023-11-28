import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getListRankPointThunk } from "./thunk";

interface StateType {
  loading: boolean;
  top1: object;
  topOther: any;
}

const initialState: StateType = {
  loading: false,
  top1: {},
  topOther: [],
};

export const slice = createSlice({
  name: "home/raking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListRankPointThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListRankPointThunk.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.top1 = [...payload].shift();
      state.topOther = [...payload].slice(1, 5);
    });
    builder.addCase(getListRankPointThunk.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
export const selectTopOther = (state: RootState) => state[slice.name]?.topOther;
export const selectTop1 = (state: RootState) => state[slice.name]?.top1;
