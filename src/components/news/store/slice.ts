import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getNewsThunk } from "./thunk";

interface NewsState {
  list: any[];
  topLatestNews: any[];
  loading: boolean;
}

const initialState: NewsState = {
  list: [],
  topLatestNews: [],
  loading: false,
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
      state.list = payload;
      state.topLatestNews = payload.slice(0, 3);
      state.loading = false;
    });
    builder.addCase(getNewsThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
export const selectListNews = (state: RootState) => state[slice.name]?.list;
export const selectTopLatestNews = (state: RootState) =>
  state[slice.name]?.topLatestNews;
