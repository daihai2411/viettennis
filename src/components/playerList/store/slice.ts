import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getListPlayersThunk } from "./thunk";

const initialState = {
  data: [],
  loading: true,
  total: 1,
  initialPage: 1,
};

export const slice = createSlice({
  name: "playerList",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getListPlayersThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListPlayersThunk.fulfilled, (state, { payload }) => {
      state.data = payload.data;
      state.total = Math.round(payload.total / payload.page_size);
      state.initialPage = payload.page;
      state.loading = false;
    });
    builder.addCase(getListPlayersThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectData = (state: RootState) => state[slice.name]?.data;
export const selectTotal = (state: RootState) => state[slice.name]?.total;
export const selectInitialPage = (state: RootState) =>
  state[slice.name]?.initialPage;
export const selectLoading = (state: RootState) => state[slice.name]?.loading;
