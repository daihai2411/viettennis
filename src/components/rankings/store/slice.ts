import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getListAllFilterRankingThunk } from "./thunk";

interface StateType {
  loading: boolean;
  data: any;
}

const initialState: StateType = {
  loading: false,
  data: { groups: [], pointTypes: [], sortBy: [] },
};

export const slice = createSlice({
  name: "ranking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListAllFilterRankingThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListAllFilterRankingThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getListAllFilterRankingThunk.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
export const selectDataFilter = (state: RootState) => state[slice.name]?.data;
