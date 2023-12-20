import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getVideosThunk } from "./thunk";

interface NewsState {
  listVideo: any[];
  loading: boolean;
}

const initialState: NewsState = {
  listVideo: [],
  loading: false,
};

export const slice = createSlice({
  name: "home/videos",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getVideosThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getVideosThunk.fulfilled, (state, { payload }) => {
      state.listVideo = payload.slice(0, 5);
      state.loading = false;
    });
    builder.addCase(getVideosThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
export const selectListVideo = (state: RootState) =>
  state[slice.name]?.listVideo;
