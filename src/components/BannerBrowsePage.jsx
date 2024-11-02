import React from "react";
import VideoTitle from "./VideoTitle";
import VideoTrailer from "./VideoTrailer";
import { useSelector } from "react-redux";

const BannerBrowsePage = () => {
  const movie = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movie) return;
  const singleMovie = movie[0];
  const { id,title, overview } = singleMovie;
  

  return (
    <div className="browseBanner">
      <VideoTrailer movieId={id}/>
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default BannerBrowsePage;
