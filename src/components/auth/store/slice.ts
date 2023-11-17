import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { steps } from "../constants";

const initialState = {
  step: steps.REGISTER,
  phoneNumber: undefined,
  password: undefined,
};

export const slice = createSlice({
  name: "login-register",
  initialState,
  reducers: {
    changeStep: (state, { payload = steps.REGISTER }) => {
      state.step = payload;
    },
    changePhoneNumber: (state, { payload }) => {
      state.phoneNumber = payload;
    },
    changePassword: (state, { payload }) => {
      state.password = payload;
    },
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const { changeStep, changePhoneNumber, changePassword } = slice.actions;

export const selectStep = (state: RootState) => state[slice.name]?.step;
export const selectPhoneNumber = (state: RootState) =>
  state[slice.name]?.phoneNumber;
export const selectPassword = (state: RootState) => state[slice.name]?.password;
