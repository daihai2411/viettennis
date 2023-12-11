import playersService from "@/core/services/players/PlayersService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListPlayersThunk = createAsyncThunk(
  "player/getList",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await playersService.getListPlayers(params);
      return res;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
