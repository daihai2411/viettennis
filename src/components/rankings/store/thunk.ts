import service from "@/core/services/rankings/RankingsService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListAllFilterRankingThunk = createAsyncThunk(
  "rankings/listAllFilter",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await service.getListAllFilterRanking();
      return {
        groups: res.data.groups,
        pointTypes: res.data.point_types,
        sort: res.data.sort,
      };
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
