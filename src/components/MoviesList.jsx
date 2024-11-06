import React from "react";
import MoviesCard from "./MoviesCard";
import { MOVIE_IMG_URL } from "../utils/constant";
import SliderComponent from "./SliderComponent";
import { moviesSliderSetting } from "../utils/sliderConfig";

const MoviesList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="allListBox">
      <h2>{title}</h2>
      <div className="cardsContainer">
        <SliderComponent setting={moviesSliderSetting}>
          {movies.map(({ id, poster_path }) => (
            <MoviesCard key={id} posterPath={MOVIE_IMG_URL + poster_path} />
          ))}
        </SliderComponent>
      </div>
    </div>
  );
};

export default MoviesList;
