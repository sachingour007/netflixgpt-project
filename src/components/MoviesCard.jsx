import React from "react";

const MoviesCard = ({ posterPath }) => {
  return (
    <div className="imgBox">
      <img src={posterPath} alt="movie poster" />
    </div>
  );
};

export default MoviesCard;
