import newsService from "@/core/services/news/NewsService";
import tournamentService from "@/core/services/tournament/TournamentService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetailTournamentThunk = createAsyncThunk(
  "tournament/getDetailTournament",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await tournamentService.getDetailTournament(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);

export const getNewsInEventThunk = createAsyncThunk(
  "tournament/getNewsInEventThunk",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await newsService.getNews(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
