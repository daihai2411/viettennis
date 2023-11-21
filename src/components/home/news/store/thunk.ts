import newsService from "@/core/services/news/NewsService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewsThunk = createAsyncThunk(
  "home/news/getNews",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await newsService.getNews(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
