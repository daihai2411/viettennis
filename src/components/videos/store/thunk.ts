import videosService from "@/core/services/videos/VideosService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getVideosThunk = createAsyncThunk(
  "videos/getVideos",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await videosService.getListVideo(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
