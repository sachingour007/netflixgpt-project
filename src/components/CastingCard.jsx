import React from "react";
import { MOVIE_IMG_URL } from "../utils/constant";

const CastingCard = ({ profile_path, character, name }) => {
  return (
    <div className="actorCard">
      <div className="imgBox">
        <img src={MOVIE_IMG_URL + profile_path} alt="castImg" />
      </div>
      <div className="nameBox">
        <p>{name}</p>
        <p>{character}</p>
      </div>
    </div>
  );
};

export default CastingCard;
