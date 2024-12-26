import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import movieFullDetailSlice from "./movieFullDeailSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieSlice,
    gptSearch: gptSlice,
    singleMovieDetails: movieFullDetailSlice,
  },
});

export default store;
