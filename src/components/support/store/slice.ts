import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { getPageSupportThunk } from "./thunk";

const initialState = {
  loading: false,
  data: {},
};

const slice = createSlice({
  name: "pageStatic",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPageSupportThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPageSupportThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(
      getPageSupportThunk.rejected,
      (state, action: Record<string, any>) => {
        state.loading = action.payload.loading;
      }
    );
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
export const selectSupportData = (state: RootState) => state[slice.name]?.data;
