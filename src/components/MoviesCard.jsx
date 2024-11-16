import React from "react";
import { NavLink } from "react-router-dom";

const MoviesCard = ({ posterPath, movieId }) => {
  return (
    <NavLink to={"/movie/" + movieId}>
      <div className="imgBox">
        <img src={posterPath} alt="movie poster" />
      </div>
    </NavLink>
  );
};

export default MoviesCard;
