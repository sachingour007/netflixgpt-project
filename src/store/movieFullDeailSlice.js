import { createSlice } from "@reduxjs/toolkit";

const movieFullDetailSlice = createSlice({
  name: "singleMovieDetails",
  initialState: {
    singleMovieDetail: null,
    singleMovieCastDetail: null,
  },
  reducers: {
    addMovieDetail: (state, action) => {
      state.singleMovieDetail = action.payload;
    },
    singlePageReset: (state, action) => {
      state.singleMovieDetail = null;
    },
    addMovieCastDetails: (state, action) => {
      state.singleMovieCastDetail = action.payload;
    },
  },
});

export const { addMovieDetail, singlePageReset, addMovieCastDetails } = movieFullDetailSlice.actions;

export default movieFullDetailSlice.reducer;
