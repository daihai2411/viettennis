import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import {
  getDetailTournamentThunk,
  getNewsInEventThunk,
  getTournamentResultThunk,
} from "./thunk";

interface NewsState {
  dataDetail: object;
  loading: boolean;
  listNewsInEvent: any[];
  loadingListNewsInEvent: boolean;
  childTournament: any[];
  childTournamentDetail: object;
  dataScoresDraw: object;
  loadingDataScoresDraw: boolean;
}

const initialState: NewsState = {
  dataDetail: {},
  loading: false,
  listNewsInEvent: [],
  loadingListNewsInEvent: false,
  childTournamentDetail: {},
  childTournament: [],
  dataScoresDraw: {},
  loadingDataScoresDraw: false,
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
        state.childTournamentDetail = payload?.tournaments?.reduce(
          (obj, item) => {
            return { ...obj, [item["rank_point"]]: item };
          },
          {}
        );
        state.childTournament = payload?.tournaments?.map(
          (item) => item?.rank_point
        );
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
    builder.addCase(getTournamentResultThunk.pending, (state) => {
      state.loadingDataScoresDraw = true;
    });
    builder.addCase(
      getTournamentResultThunk.fulfilled,
      (state, { payload }) => {
        state.dataScoresDraw = payload?.reduce((obj, item) => {
          return { ...obj, [item["rank_point"]]: item };
        }, {});
        state.loadingDataScoresDraw = false;
      }
    );
    builder.addCase(getTournamentResultThunk.rejected, (state) => {
      state.loadingDataScoresDraw = false;
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
export const selectChildTournamentDetail = (state: RootState) =>
  state[slice.name]?.childTournamentDetail;
export const selectChildTournament = (state: RootState) =>
  state[slice.name]?.childTournament;
export const selectLoadingDataScoresDraw = (state: RootState) =>
  state[slice.name]?.loadingDataScoresDraw;
export const selectDataScoresDraw = (state: RootState) =>
  state[slice.name]?.dataScoresDraw;
