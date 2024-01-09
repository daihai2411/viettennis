import service from "@/core/services/rankings/RankingsService";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListAllFilterRankingThunk = createAsyncThunk(
  "rankings/listAllFilter",
  async (params: any, { rejectWithValue }) => {
    try {
      const res: any = await service.getListAllFilterRanking();
      return {
        sortBy: [
          {
            value: "point_desc",
            name: "Điểm số giảm dần",
          },
          {
            value: "point_asc",
            name: "Điểm số tăng dần",
          },
          {
            value: "rank_desc",
            name: "Thứ hạng giảm dần",
          },
          {
            value: "rank_asc",
            name: "Thứ hạng tăng dần",
          },
          {
            value: "year_old_desc",
            name: "Tuổi giảm dần",
          },
          {
            value: "year_old_asc",
            name: "Tuổi tăng dần",
          },
        ],
        groups: [
          {
            id: 1,
            value: "Miền Bắc (nam)",
          },
          {
            id: 2,
            value: "Miền Trung (nam)",
          },
          {
            id: 3,
            value: "Miền Nam (nam)",
          },
          {
            id: 4,
            value: "Miền Nam (nữ)",
          },
          {
            id: 5,
            value: "Miền Bắc (nữ) ",
          },
          {
            id: 6,
            value: "Miền Trung (nữ)",
          },
        ],
        pointTypes: [
          {
            id: 1,
            value: "Điểm xanh",
          },
          {
            id: 2,
            value: "Điểm đỏ",
          },
          {
            id: 3,
            value: "Điểm đề xuất",
          },
        ],
      };
      // {
      //   groups: res.data.groups,
      //   pointTypes: res.data.point_types,
      //   sortBy: res.data.sort,
      // };
    } catch (error) {
      return rejectWithValue({ loading: axios.isCancel(error) });
    }
  }
);
