import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
  loading: boolean;
  data: any;
  page: number;
}

const initialState: StateType = {
  loading: false,
  data: [],
  page: 0,
};

export const slice = createSlice({
  name: "ranking",
  initialState,
  reducers: {},
});

reducerRegistry.register(slice.name, slice.reducer);

export const {} = slice.actions;

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
