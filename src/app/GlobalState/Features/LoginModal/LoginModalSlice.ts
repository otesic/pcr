"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface LoginModalState {
  vlaue: boolean;
}

const initialState: LoginModalState = {
  vlaue: false,
};

export const LoginModalSlice = createSlice({
  name: "LoginModal",
  initialState,
  reducers: {
    LoginModalState: (state, action) => {
      state.vlaue = action.payload;
    },
  },
});

export const { LoginModalState } = LoginModalSlice.actions;

export default LoginModalSlice.reducer;
