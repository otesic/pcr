"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface ChatBotState {
  vlaue: boolean;
}

const initialState: ChatBotState = {
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
