import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { steps } from "../constants";
import {
  getListPersonalPointCriteriaThunk,
  getListPersonalPointDetailByCriteriaThunk,
} from "./thunk";

const initialState = {
  step: steps.REGISTER,
  phoneNumber: undefined,
  password: undefined,
  listPersonalPoint: [],
  loadingListPersonalPoint: false,
  listPersonalPointDetail: [],
  loadingListPersonalPointDetail: false,
  objPoint: {},
  email: undefined,
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
    changeValueObjPoint: (state, { payload }) => {
      state.objPoint = { ...state.objPoint, ...payload };
    },
    changeEmail: (state, { payload }) => {
      state.email = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getListPersonalPointCriteriaThunk.pending, (state) => {
      state.loadingListPersonalPoint = true;
    });
    builder.addCase(
      getListPersonalPointCriteriaThunk.fulfilled,
      (state, action) => {
        state.listPersonalPoint = action.payload;
        state.loadingListPersonalPoint = false;
      }
    );
    builder.addCase(getListPersonalPointCriteriaThunk.rejected, (state) => {
      state.loadingListPersonalPoint = false;
    });
    builder.addCase(
      getListPersonalPointDetailByCriteriaThunk.pending,
      (state) => {
        state.loadingListPersonalPointDetail = true;
      }
    );
    builder.addCase(
      getListPersonalPointDetailByCriteriaThunk.fulfilled,
      (state, action) => {
        state.listPersonalPointDetail = action.payload;
        state.loadingListPersonalPointDetail = false;
      }
    );
    builder.addCase(
      getListPersonalPointDetailByCriteriaThunk.rejected,
      (state) => {
        state.loadingListPersonalPointDetail = false;
      }
    );
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {
  changeStep,
  changePhoneNumber,
  changePassword,
  changeValueObjPoint,
  changeEmail,
} = slice.actions;

export const selectStep = (state: RootState) => state[slice.name]?.step;
export const selectPhoneNumber = (state: RootState) =>
  state[slice.name]?.phoneNumber;
export const selectPassword = (state: RootState) => state[slice.name]?.password;
export const selectLoadingListPersonalPoint = (state: RootState) =>
  state[slice.name]?.loadingListPersonalPoint;
export const selectLoadingListPersonalPointDetail = (state: RootState) =>
  state[slice.name]?.loadingListPersonalPointDetail;
export const selectListPersonalPoint = (state: RootState) =>
  state[slice.name]?.listPersonalPoint;
export const selectListPersonalPointDetail = (state: RootState) =>
  state[slice.name]?.listPersonalPointDetail;
export const selectObjPoints = (state: RootState) =>
  state[slice.name]?.objPoint;
export const selectEmail = (state: RootState) => state[slice.name]?.email;
