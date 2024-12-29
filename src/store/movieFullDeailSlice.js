import { createSlice } from "@reduxjs/toolkit";

const movieFullDetailSlice = createSlice({
  name: "singleMovieDetails",
  initialState: {
    singleMovieDetail: null,
    singleMovieCastDetail: null,
    recommendedMovies: null,
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
    recommendedMovies: (state, action) => {
      state.recommendedMovies = action.payload;
    },
  },
});

export const {
  addMovieDetail,
  singlePageReset,
  addMovieCastDetails,
  recommendedMovies,
} = movieFullDetailSlice.actions;

export default movieFullDetailSlice.reducer;
