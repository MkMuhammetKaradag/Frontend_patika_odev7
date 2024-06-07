import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import BookAppReducer from "./Book/bookSlice";

const store = configureStore({
  reducer: {
    app: BookAppReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
