import newsService from "@/core/services/news/NewsService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewsDetailThunk = createAsyncThunk(
  "news/getNewsDetail",
  async (params: { newsId: any }, { rejectWithValue }) => {
    try {
      const res: any = await newsService.getNewsDetail(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);

export const getNewsThunk = createAsyncThunk(
  "news/detail/getNews",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await newsService.getNews(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
