"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface KaKaoState {
  vlaue: any;
}

const initialState: KaKaoState = {
  vlaue: [{ lat: "", lng: "" }],
};

export const kakaoSlice = createSlice({
  name: "kakaoState",
  initialState,
  reducers: {
    setKakao: (state, action) => {
      state.vlaue = { lat: action.payload, lng: action.payload };
    },
  },
});

export const { setKakao } = kakaoSlice.actions;

export default kakaoSlice.reducer;
