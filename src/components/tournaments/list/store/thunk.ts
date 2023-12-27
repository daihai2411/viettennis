import tournamentService from "@/core/services/tournament/TournamentService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListTournamentThunk = createAsyncThunk(
  "tournament/getListTournament",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await tournamentService.getListTournament(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
