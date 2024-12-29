import React, { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { addMovieCastDetails } from "../store/movieFullDeailSlice";
import { useDispatch } from "react-redux";

const useCastDetails = (id) => {
  const dispatch = useDispatch();
  const getCastDetails = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      API_OPTION
    );
    const movieCast = await res.json();
    dispatch(addMovieCastDetails(movieCast));
  };
  useEffect(() => {
    getCastDetails();
  }, [id]);
};

export default useCastDetails;
