"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface KaKaoState {
  vlaue: any;
}

const initialState: KaKaoState = {
  vlaue: [],
};

export const kakaoSlice = createSlice({
  name: "kakaoState",
  initialState,
  reducers: {
    setKakao: (state, action) => {
      state.vlaue = [
        ...state.vlaue,
        { lat: action.payload[0].lat, lng: action.payload[0].lng },
      ];
    },
  },
});

export const { setKakao } = kakaoSlice.actions;

export default kakaoSlice.reducer;
