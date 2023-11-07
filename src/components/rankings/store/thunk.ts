import service from "@/core/services/rankings/RankingsSinglesService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListRealEstateAgencyThunk = createAsyncThunk(
  "rankings/singles",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await service.getListRankPoint(params);
      console.log(res);
      return {
        data: res.data.data,
        total: res.data.total,
        page: res.data.page,
        pageSize: res.data.page_size,
        count: res.data.count,
      };
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
