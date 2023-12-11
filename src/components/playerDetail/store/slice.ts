import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getProfileByIdThunk } from "./thunk";

const initialState = {
  data: {},
  loading: true,
};

export const slice = createSlice({
  name: "playerDetail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProfileByIdThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProfileByIdThunk.fulfilled, (state, { payload }) => {
      state.data = payload;

      state.loading = false;
    });
    builder.addCase(getProfileByIdThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectData = (state: RootState) => state[slice.name]?.data;
export const selectLoading = (state: RootState) => state[slice.name]?.loading;
