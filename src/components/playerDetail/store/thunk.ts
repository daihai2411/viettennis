import profileService from "@/core/services/profile/ProfileService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfileByIdThunk = createAsyncThunk(
  "player/getProfileById",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await profileService.getProfileById(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
