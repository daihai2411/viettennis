import reducerRegistry from "@/helpers/ReducerRegistry";
import { createSlice } from "@reduxjs/toolkit";

type State = {
  kindPopup: string | null;
};

const initialState: State = {
  kindPopup: null,
};

export const slice = createSlice({
  name: "login-register",
  initialState,
  reducers: {
    changeKindPopup: (state, action) => {
      state.kindPopup = action.payload;
    },
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const { changeKindPopup } = slice.actions;
