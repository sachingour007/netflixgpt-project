import React from "react";
import useNowPlayingMoies from "../Hooks/useNowPlayingMoies";
import BannerBrowsePage from "./BannerBrowsePage";

const Browse = () => {
  useNowPlayingMoies();
  return (
    <>
      <BannerBrowsePage />
    </>
  );
};

export default Browse;
