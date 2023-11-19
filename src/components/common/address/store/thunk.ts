import commonService from "@/core/services/common/CommonService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProvincesThunk = createAsyncThunk(
  "address/provinces",
  async (params, { rejectWithValue }) => {
    try {
      const res: any = await commonService.getProvinces(params as any);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);

export const getDistrictsThunk = createAsyncThunk(
  "address/districts",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await commonService.getDistricts(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);

export const getWardsThunk = createAsyncThunk(
  "address/wards",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await commonService.getWards(params);
      return res.data;
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
