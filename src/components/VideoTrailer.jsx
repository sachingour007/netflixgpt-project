import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useMoviesTrailer";

const VideoTrailer = ({ movieId }) => {
  const trailerKey = useSelector((store) => store.movies?.trailerVideo);
  useMoviesTrailer(movieId);
  return (
    <div className="videoContainer">
      <iframe
        className="videoframe"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoTrailer;