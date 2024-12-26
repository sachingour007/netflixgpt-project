import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addMovieDetail } from "../store/movieFullDeailSlice";

const useMovieDetail = (id) => {
  const dispatch = useDispatch();
  const getMovieDetail = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
      API_OPTION
    );

    const movieDetail = await res.json();
    dispatch(addMovieDetail(movieDetail));
  };

  useEffect(() => {
    getMovieDetail();
  }, []);
};

export default useMovieDetail;
