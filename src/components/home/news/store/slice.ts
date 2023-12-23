import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getNewsThunk } from "./thunk";

interface NewsState {
  newsFirst: object;
  newsSecond: any[];
  loading: boolean;
  listNews: any[];
  listTop3News: any[];
}

const initialState: NewsState = {
  newsFirst: {},
  newsSecond: [],
  loading: false,
  listNews: [],
  listTop3News: [],
};

export const slice = createSlice({
  name: "home/news",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getNewsThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getNewsThunk.fulfilled, (state, { payload }) => {
      state.newsFirst = [...payload].shift();
      state.newsSecond = [...payload].slice(1, 3);
      state.listNews = payload;
      state.loading = false;
      state.listTop3News = [...payload].slice(0, 3);
    });
    builder.addCase(getNewsThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
export const selectNewsFirst = (state: RootState) =>
  state[slice.name]?.newsFirst;
export const selectNewsSecond = (state: RootState) =>
  state[slice.name]?.newsSecond;
export const selectListNews = (state: RootState) => state[slice.name]?.listNews;
export const selectListTop3News = (state: RootState) =>
  state[slice.name]?.listTop3News;
