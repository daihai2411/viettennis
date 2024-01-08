import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { steps } from "../constants";
import {
  getListPersonalPointCriteriaThunk,
  getListPersonalPointDetailByCriteriaThunk,
  getProfileCheck,
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
  dataProfile: {} as any,
  isLoadingProfile: false,
  stepForgetPassword: 1,
  username: undefined,
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
    resetDataProfile: (state) => {
      state.dataProfile = {};
    },
    changeUsername: (state, { payload }) => {
      state.username = payload;
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
    builder.addCase(getProfileCheck.pending, (state) => {
      state.isLoadingProfile = true;
    });
    builder.addCase(getProfileCheck.fulfilled, (state, action) => {
      state.isLoadingProfile = false;
      state.dataProfile = action.payload;
    });
    builder.addCase(getProfileCheck.rejected, (state) => {
      state.isLoadingProfile = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const {
  changeStep,
  changePhoneNumber,
  changePassword,
  changeValueObjPoint,
  changeEmail,
  resetDataProfile,
  changeUsername,
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
export const selectProfile = (state: RootState) =>
  state[slice.name]?.dataProfile;
export const selectLoadingProfile = (state: RootState) =>
  state[slice.name]?.isLoadingProfile;
export const selectUsername = (state: RootState) => state[slice.name]?.username;
