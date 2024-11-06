import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addUpcominMovies } from "../store/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const res = await fetch(
      " https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTION
    );
    const jsonData = await res.json();
    dispatch(addUpcominMovies(jsonData.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
