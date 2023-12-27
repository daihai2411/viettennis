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
