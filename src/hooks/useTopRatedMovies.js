import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import {    addTopRatedMovies } from "../store/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const res = await fetch(
      " https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTION
    );
    const jsonData = await res.json();
    dispatch(addTopRatedMovies(jsonData.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
