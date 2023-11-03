import reducerRegistry from "@/helpers/ReducerRegistry";
import { RootState } from "@/redux/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const slice = createSlice({
  name: "news",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

reducerRegistry.register(slice.name, slice.reducer);

export const { increment, decrement, incrementByAmount } = slice.actions;

export const selectCount = (state: RootState) => state[slice.name]?.value;
