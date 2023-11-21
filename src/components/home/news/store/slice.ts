import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getNewsThunk } from "./thunk";

interface NewsState {
  newsFirst: object;
  newsSecond: object;
  listNewsNext: any[];
  loading: boolean;
}

const initialState: NewsState = {
  newsFirst: {},
  newsSecond: {},
  listNewsNext: [],
  loading: false,
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
      console.log(payload);

      state.newsFirst = [...payload].shift();
      state.newsSecond = [...payload].find((_, index) => index === 1);
      state.listNewsNext = [...payload].slice(2, 5);
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
export const selectNewsFirst = (state: RootState) =>
  state[slice.name]?.newsFirst;
export const selectNewsSecond = (state: RootState) =>
  state[slice.name]?.newsSecond;
export const selectListNewsNext = (state: RootState) =>
  state[slice.name]?.listNewsNext;
