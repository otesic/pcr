"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterRudcer from "./Features/Counter/counterSlice";

export const store = configureStore({
  reducer: {
    counterRudcer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
