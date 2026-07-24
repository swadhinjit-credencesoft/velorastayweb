import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import bookingReducer from "./slices/bookingSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
      booking: bookingReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
