import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { recommendedMovies } from "../store/movieFullDeailSlice";

const useRecommendedMovie = (id) => {
  const dispatch = useDispatch();
  const getRemmendedMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      API_OPTION
    );
    const getRecommedData = await res.json();
    dispatch(recommendedMovies(getRecommedData.results));
  };

  useEffect(() => {
    getRemmendedMovies();
  }, [id]);
};

export default useRecommendedMovie;
