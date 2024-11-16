import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null,
    movieDetail: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcominMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovieDetail: (state, action) => {
      state.movieDetail = action.payload;
    },
    singlePageReset: (state, action) => {
      state.movieDetail = null;
    },
  },
});

export const {
  addMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcominMovies,
  addMovieDetail,
  singlePageReset,
} = movieSlice.actions;
export default movieSlice.reducer;
