import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";
import { DATA_MONTH_TEMPLATE } from "../../constants";
import { getFullFilterTournamentThunk, getListTournamentThunk } from "./thunk";

interface NewsState {
  list: any[];
  listFilter: object;
  loading: boolean;
  filter: object;
  loadingFilter: boolean;
  monthActive: string;
}

const initialState: NewsState = {
  list: [],
  listFilter: {},
  loading: false,
  filter: {},
  loadingFilter: false,
  monthActive: `month-${new Date().getMonth() + 1}`,
};

export const slice = createSlice({
  name: "tournament/list",
  initialState,
  reducers: {
    changeListFilter: (state, action) => {
      state.listFilter = action.payload;
    },
    changeMonthActive: (state, action) => {
      state.monthActive = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getListTournamentThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getListTournamentThunk.fulfilled, (state, { payload }) => {
      const dataMonth = payload.map((item) => item.month);
      state.list = dataMonth?.length
        ? [
            ...payload,
            ...DATA_MONTH_TEMPLATE.filter(
              (item) => !dataMonth.includes(item.month)
            ),
          ]
        : [];
      state.loading = false;
    });
    builder.addCase(getListTournamentThunk.rejected, (state) => {
      state.loading = false;
    });
    builder.addCase(getFullFilterTournamentThunk.pending, (state) => {
      state.loadingFilter = true;
    });
    builder.addCase(
      getFullFilterTournamentThunk.fulfilled,
      (state, { payload }) => {
        state.filter = payload;
        state.loadingFilter = false;
      }
    );
    builder.addCase(getFullFilterTournamentThunk.rejected, (state) => {
      state.loadingFilter = false;
    });
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const { changeListFilter, changeMonthActive } = slice.actions;

export const selectLoading = (state: RootState) => state[slice.name]?.loading;
export const selectListTournament = (state: RootState) =>
  state[slice.name]?.list;
export const selectListFilter = (state: RootState) =>
  state[slice.name]?.listFilter;
export const selectLoadingFilter = (state: RootState) =>
  state[slice.name]?.loadingFilter;
export const selectFilterTournament = (state: RootState) =>
  state[slice.name]?.filter;
export const selectMonthActive = (state: RootState) =>
  state[slice.name]?.monthActive;
