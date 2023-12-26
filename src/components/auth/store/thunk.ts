import profileService from "@/core/services/profile/ProfileService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListPersonalPointCriteriaThunk = createAsyncThunk(
  "profile/listPersonalPointCriteria",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await profileService.getListPersonalPointCriteria();
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);

export const getListPersonalPointDetailByCriteriaThunk = createAsyncThunk(
  "profile/listPersonalPointDetailByCriteria",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any =
        await profileService.getListPersonalPointDetailByCriteria(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);

export const getProfileCheck = createAsyncThunk(
  "profile/getProfileThunk",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await profileService.getProfile();
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
