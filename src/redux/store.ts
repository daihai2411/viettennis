import reducerRegistry from "@/helpers/ReducerRegistry";
import { Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducers(<Record<string, Reducer>>{
    ...reducerRegistry.getReducers(),
  }),
  devTools: true,
});

reducerRegistry.setChangeListener((reducers) => {
  store.replaceReducer(
    combineReducers(<Record<string, Reducer>>{
      ...reducers,
    })
  );
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
