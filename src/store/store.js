import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieSlice,
    gptSearch: gptSlice,
  },
});

export default store;
