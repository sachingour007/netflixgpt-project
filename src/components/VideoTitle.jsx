import React from "react";
import { useNavigate } from "react-router-dom";
import { playButton } from "../assets/images";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  const bannerMovieDetail = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="titleContainer">
      <h1>{title}</h1>
      <p>{overview}</p>
      <div className="btnContainer">
        {/* <span className="btn playBtn">
          <img src={playButton} alt="" />
          Play
        </span> */}
        <span
          className="btn InfoBtn"
          onClick={() => bannerMovieDetail(movieId)}
        >
          More Info
        </span>
      </div>
    </div>
  );
};

export default VideoTitle;
