import { createSlice } from "@reduxjs/toolkit";
import reducer from "./movieSlice";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    isGptBtn: false,
  },
  reducers: {
    gptVal: (state, action) => {
      state.isGptBtn = !state.isGptBtn;
    },
  },
});
export const { gptVal } = gptSlice.actions;

export default gptSlice.reducer;
