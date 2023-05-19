"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface ChatBotState {
  vlaue: number;
}

const initialState: ChatBotState = {
  vlaue: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.vlaue += 1;
    },
    decrement: (state) => {
      state.vlaue -= 1;
    },
    incrementByAmount: (state, action) => {
      state.vlaue += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
