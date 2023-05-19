"use client";
import { createSlice } from "@reduxjs/toolkit";

export interface CanSkillNavState {
  vlaue: any;
}

const initialState: CanSkillNavState = {
  vlaue: "",
};

export const CanSkillNavSlice = createSlice({
  name: "canSkillNavValue",
  initialState,
  reducers: {
    navValue: (state, action) => {
      state.vlaue = action.payload;
    },
  },
});

export const { navValue } = CanSkillNavSlice.actions;

export default CanSkillNavSlice.reducer;
