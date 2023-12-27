import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getDetailTournamentThunk } from "./thunk";

interface NewsState {
  dataDetail: object;
  loading: boolean;
}

const initialState: NewsState = {
  dataDetail: {},
  loading: false,
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
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
export const selectTournamentDetail = (state: RootState) =>
  state[slice.name]?.dataDetail;
