import profileService from "@/core/services/profile/ProfileService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfileThunk = createAsyncThunk(
  "common/getProfileThunk",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await profileService.getProfile();
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
