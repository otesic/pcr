"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  vlaue: boolean;
}

const initialState: CounterState = {
  vlaue: false,
};

export const chatBotSlice = createSlice({
  name: "chatBotOnOff",
  initialState,
  reducers: {
    onChat: (state, action) => {
      state.vlaue = action.payload;
    },
  },
});

export const { onChat } = chatBotSlice.actions;

export default chatBotSlice.reducer;
