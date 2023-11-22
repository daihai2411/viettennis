import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getNewsLoadMoreThunk, getNewsThunk } from "./thunk";

interface NewsState {
  list: any[];
  totalPage: number;
  topLatestNews: any[];
  loading: boolean;
  loadingMoreData: boolean;
}

const initialState: NewsState = {
  list: [],
  totalPage: 0,
  topLatestNews: [],
  loading: false,
  loadingMoreData: false,
};

export const slice = createSlice({
  name: "news/list",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getNewsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNewsThunk.fulfilled, (state, { payload }) => {
      state.list = payload.data;
      state.topLatestNews = payload.data.slice(0, 3);
      state.totalPage = payload.total;
      state.loading = false;
    });
    builder.addCase(getNewsThunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getNewsLoadMoreThunk.pending, (state) => {
      state.loadingMoreData = true;
    });
    builder.addCase(getNewsLoadMoreThunk.fulfilled, (state, { payload }) => {
      state.list = [...state.list, ...payload];
      state.loadingMoreData = false;
    });
    builder.addCase(getNewsLoadMoreThunk.rejected, (state) => {
      state.loadingMoreData = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
export const selectListNews = (state: RootState) => state[slice.name]?.list;
export const selectTopLatestNews = (state: RootState) =>
  state[slice.name]?.topLatestNews;
export const selectLoadingMoreData = (state: RootState) =>
  state[slice.name]?.loadingMoreData;
export const selectTotalPage = (state: RootState) =>
  state[slice.name]?.totalPage;
