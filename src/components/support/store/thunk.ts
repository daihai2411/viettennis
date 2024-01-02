import pageService from "@/core/services/page/PageServive";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPageSupportThunk = createAsyncThunk<any, any>(
  "pages/support/getPageSupportThunk",
  async (params, { rejectWithValue }) => {
    try {
      const res: any = await pageService.getPageSupport(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
