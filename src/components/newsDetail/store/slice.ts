import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getNewsDetailThunk, getNewsThunk } from "./thunk";

interface NewsState {
  data: object;
  loading: boolean;
  listNews: object;
  loadingListNews: boolean;
}

const initialState: NewsState = {
  data: {},
  loading: false,
  listNews: [],
  loadingListNews: false,
};

export const slice = createSlice({
  name: "news/detail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getNewsDetailThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNewsDetailThunk.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    });
    builder.addCase(getNewsDetailThunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getNewsThunk.pending, (state) => {
      state.loadingListNews = true;
    });
    builder.addCase(getNewsThunk.fulfilled, (state, { payload }) => {
      state.listNews = payload;
      state.loadingListNews = false;
    });
    builder.addCase(getNewsThunk.rejected, (state) => {
      state.loadingListNews = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
export const selectNewsDetail = (state: RootState) => state[slice.name]?.data;
export const selectLoadingListNews = (state: RootState) =>
  state[slice.name]?.loadingListNews;
export const selectListNews = (state: RootState) => state[slice.name]?.listNews;
