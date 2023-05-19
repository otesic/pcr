"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterRudcer from "./Features/Counter/counterSlice";
import chatBotReducer from "./Features/ChatBot/chatSlice";
import canSkillNavReduce from "./Features/CanSkillNav/CanSkillNavSilce";

export const store = configureStore({
  reducer: {
    counterRudcer,
    chatBotReducer,
    canSkillNavReduce,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
