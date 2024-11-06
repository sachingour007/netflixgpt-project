import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addPopularMovies } from "../store/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTION
    );
    const jsonData = await res.json();
    dispatch(addPopularMovies(jsonData.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
