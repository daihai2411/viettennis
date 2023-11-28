import service from "@/core/services/rankings/RankingsService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListRankPointThunk = createAsyncThunk(
  "home/ranking/getListRankPoint",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await service.getListRankPoint(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
