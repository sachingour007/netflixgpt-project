import React from "react";
import { playButton } from "../assets/images";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="titleContainer">
      <h1>{title}</h1>
      <p>{overview}</p>
      <div className="btnContainer">
        <span className="btn playBtn">
          <img src={playButton} alt="" />
          Play
        </span>
        <span className="btn InfoBtn">More Info</span>
      </div>
    </div>
  );
};

export default VideoTitle;
