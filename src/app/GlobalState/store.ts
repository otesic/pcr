"use client";
import { configureStore } from "@reduxjs/toolkit";
import counterRudcer from "./Features/Counter/counterSlice";
import chatBotReducer from "./Features/ChatBot/chatSlice";
import canSkillNavReducer from "./Features/CanSkillNav/CanSkillNavSilce";
import loginModalReducer from "./Features/LoginModal/LoginModalSlice";

export const store = configureStore({
  reducer: {
    counterRudcer,
    chatBotReducer,
    canSkillNavReducer,
    loginModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
