import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getDetailTournamentThunk, getNewsInEventThunk } from "./thunk";

interface NewsState {
  dataDetail: object;
  loading: boolean;
  listNewsInEvent: any[];
  loadingListNewsInEvent: boolean;
}

const initialState: NewsState = {
  dataDetail: {},
  loading: false,
  listNewsInEvent: [],
  loadingListNewsInEvent: false,
};

export const slice = createSlice({
  name: "tournament/detail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getDetailTournamentThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getDetailTournamentThunk.fulfilled,
      (state, { payload }) => {
        state.dataDetail = payload;
        state.loading = false;
      }
    );
    builder.addCase(getDetailTournamentThunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getNewsInEventThunk.pending, (state) => {
      state.loadingListNewsInEvent = true;
    });
    builder.addCase(getNewsInEventThunk.fulfilled, (state, { payload }) => {
      state.listNewsInEvent = payload;
      state.loadingListNewsInEvent = false;
    });
    builder.addCase(getNewsInEventThunk.rejected, (state) => {
      state.loadingListNewsInEvent = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
export const selectTournamentDetail = (state: RootState) =>
  state[slice.name]?.dataDetail;
export const selectLoadingListNewsInEvent = (state: RootState) =>
  state[slice.name]?.loadingListNewsInEvent;
export const selectListNewsInEvent = (state: RootState) =>
  state[slice.name]?.listNewsInEvent;
