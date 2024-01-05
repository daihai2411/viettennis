import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  matchDrawActive: null,
  matchDrawSearch: null,
};

export const slice = createSlice({
  name: "tournament/detail/draws",
  initialState,
  reducers: {
    changeMatchDrawActive: (state, { payload }) => {
      state.matchDrawActive = payload;
    },
    changeMatchDrawSearch: (state, { payload }) => {
      state.matchDrawSearch = payload;
    },
    resetState: (state) => {
      state = {
        matchDrawActive: null,
        matchDrawSearch: null,
      };
    },
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const { changeMatchDrawActive, changeMatchDrawSearch } = slice.actions;

export const selectMatchDrawActive = (state: RootState) =>
  state[slice.name]?.matchDrawActive;
export const selectMatchDrawSearch = (state: RootState) =>
  state[slice.name]?.matchDrawSearch;
