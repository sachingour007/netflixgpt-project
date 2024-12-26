import { createSlice } from "@reduxjs/toolkit";

const movieFullDetailSlice = createSlice({
  name: "singleMovieDetails",
  initialState: {
    singleMovieDetail: null,
  },
  reducers: {
    addMovieDetail: (state, action) => {
      state.singleMovieDetail = action.payload;
    },
    singlePageReset: (state, action) => {
      state.singleMovieDetail = null;
    },
  },
});

export const { addMovieDetail, singlePageReset } = movieFullDetailSlice.actions;

export default movieFullDetailSlice.reducer;
