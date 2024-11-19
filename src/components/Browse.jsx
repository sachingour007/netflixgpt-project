import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BannerBrowsePage from "./BannerBrowsePage";
import MovieSuggestionPage from "./MovieSuggestionPage";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "../pages/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const isGpt = useSelector((store) => store.gptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      {isGpt.isGptBtn ? (
        <GptSearch />
      ) : (
        <>
          <BannerBrowsePage />
          <MovieSuggestionPage />
        </>
      )}
    </>
  );
};

export default Browse;
