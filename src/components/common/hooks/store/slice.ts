import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getProfileThunk } from "./thunk";

const initialState = {
  dataProfile: {},
  isLoadingProfile: false,
};

export const slice = createSlice({
  name: "components/common",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProfileThunk.pending, (state) => {
      state.isLoadingProfile = true;
    });
    builder.addCase(getProfileThunk.fulfilled, (state, action) => {
      state.isLoadingProfile = false;
      state.dataProfile = action.payload;
    });
    builder.addCase(getProfileThunk.rejected, (state) => {
      state.isLoadingProfile = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectProfile = (state: RootState) =>
  state[slice.name]?.dataProfile;
export const selectLoadingProfile = (state: RootState) =>
  state[slice.name]?.isLoadingProfile;
