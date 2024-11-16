import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_IMG_URL500 } from "../utils/constant";
import { singlePageReset } from "../store/movieSlice";
import { movieDetailsBg, timeIcon } from "../assets/images";
import { formatRuntime } from "../utils/supportFunctions";

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
          <img src={MOVIE_IMG_URL500 + movieDetail?.poster_path} alt="" />
        </div>
        <div className="movieDetails">
          <h6>{new Date(movieDetail.release_date).getFullYear()}</h6>
          <h2>{movieDetail.title}</h2>
          <div className="geners">
          {movieDetail.genres.map((gener) => (
            <span key={gener.id}>{gener.name}</span>
          ))}
          </div>
          <p>{movieDetail.overview}</p>
          <div className="otherDetails">
            <div className="timeFrame">
              <img src={timeIcon} alt="" />
              <p>{formatRuntime(movieDetail.runtime)}</p>
            </div>
            <div className="status">
              <p>{movieDetail.status}</p>
            </div>
            <div className="rating">
              <p>{movieDetail.vote_average}/10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMoviePage;
