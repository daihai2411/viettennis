import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getListTournamentThunk } from "./thunk";

interface NewsState {
  list: any[];
  loading: boolean;
}

const initialState: NewsState = {
  list: [],
  loading: false,
};

export const slice = createSlice({
  name: "tournament/list",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getListTournamentThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListTournamentThunk.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.loading = false;
    });
    builder.addCase(getListTournamentThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
export const selectListTournament = (state: RootState) =>
  state[slice.name]?.list;
