import newsService from "@/core/services/news/NewsService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewsThunk = createAsyncThunk(
  "news/getNews",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await newsService.getNews(params);
      return res;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);

export const getListCategoryThunk = createAsyncThunk(
  "news/getListCategory",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await newsService.getListCategory(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);

export const getNewsLoadMoreThunk = createAsyncThunk(
  "news/getNewsLoadMore",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await newsService.getNews(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
