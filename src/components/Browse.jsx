import React from "react";
import useNowPlayingMoies from "../Hooks/useNowPlayingMoies";
import BannerBrowsePage from "./BannerBrowsePage";
import MovieSuggestionPage from "./MovieSuggestionPage";

const Browse = () => {
  useNowPlayingMoies();
  return (
    <>
      <BannerBrowsePage />
      <MovieSuggestionPage />
    </>
  );
};

export default Browse;
