import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { dataTest } from "./dummy";
import { getFullFilterTournamentThunk, getListTournamentThunk } from "./thunk";

interface NewsState {
  list: any[];
  listFilter: object;
  loading: boolean;
  filter: object;
  loadingFilter: boolean;
}

const initialState: NewsState = {
  list: [],
  listFilter: {},
  loading: false,
  filter: {},
  loadingFilter: false,
};

export const slice = createSlice({
  name: "tournament/list",
  initialState,
  reducers: {
    changeListFilter: (state, action) => {
      state.listFilter = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getListTournamentThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListTournamentThunk.fulfilled, (state, { payload }) => {
      state.list = dataTest;
      state.loading = false;
    });
    builder.addCase(getListTournamentThunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getFullFilterTournamentThunk.pending, (state) => {
      state.loadingFilter = true;
    });
    builder.addCase(
      getFullFilterTournamentThunk.fulfilled,
      (state, { payload }) => {
        state.filter = payload;
        state.loadingFilter = false;
      }
    );
    builder.addCase(getFullFilterTournamentThunk.rejected, (state) => {
      state.loadingFilter = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const { changeListFilter } = slice.actions;

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
export const selectListTournament = (state: RootState) =>
  state[slice.name]?.list;
export const selectListFilter = (state: RootState) =>
  state[slice.name]?.listFilter;
export const selectLoadingFilter = (state: RootState) =>
  state[slice.name]?.loadingFilter;
export const selectFilterTournament = (state: RootState) =>
  state[slice.name]?.filter;
