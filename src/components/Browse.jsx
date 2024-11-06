import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BannerBrowsePage from "./BannerBrowsePage";
import MovieSuggestionPage from "./MovieSuggestionPage";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      <BannerBrowsePage />
      <MovieSuggestionPage />
    </>
  );
};

export default Browse;
