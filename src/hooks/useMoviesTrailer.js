import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addDetailsPageTrailer, addTrailerVideo } from "../store/movieSlice";

const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTION
    );
    const data = await res.json();
    const filterTrailers = data.results.filter(
      (clip) => clip.type === "Trailer"
    );
    const trailer = filterTrailers.length ? filterTrailers[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
    dispatch(addDetailsPageTrailer(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, [movieId]);
};

export default useMoviesTrailer;
