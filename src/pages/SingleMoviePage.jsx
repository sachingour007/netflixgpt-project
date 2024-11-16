import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_IMG_URL } from "../utils/constant";
import { singlePageReset } from "../store/movieSlice";
import { movieDetailsBg } from "../assets/images";

const SingleMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useMovieDetail(id);
  const allMovieDetail = useSelector((store) => store.movies);
  console.log(allMovieDetail.movieDetail);
  const { movieDetail } = allMovieDetail;

  useEffect(() => {
    dispatch(singlePageReset());
  }, []);
  if (!movieDetail) return;
  return (
    <section className="mainContainer">
        <img src={movieDetailsBg} alt="" />
      <div className="wrapper">
        <div className="imgBox">
          <img src={MOVIE_IMG_URL + movieDetail?.poster_path} alt="" />
        </div>
        <div className="movieDetails"></div>
      </div>
    </section>
  );
};

export default SingleMoviePage;
