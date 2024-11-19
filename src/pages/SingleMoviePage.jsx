import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_IMG_URL500 } from "../utils/constant";
import { singlePageReset } from "../store/movieSlice";
import {
  movieDetailsBg,
  timeIcon,
  releasedIcon,
  ratingIcon,
} from "../assets/images";
import { formatRuntime } from "../utils/supportFunctions";
import useMoviesTrailer from "../hooks/useMoviesTrailer";
import LoaderShimmerUi from "../components/LoaderShimmerUi";

const SingleMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useMovieDetail(id);
  const allMovieDetail = useSelector((store) => store.movies);
  console.log(allMovieDetail.movieDetail);
  const { movieDetail } = allMovieDetail;
  const trailerKey = useSelector((store) => store.movies?.detailsPageTrailer);

  useMoviesTrailer(id);

  useEffect(() => {
    dispatch(singlePageReset());
  }, []);

  const trailerHandler = () => {
    if (trailerKey && trailerKey.key) {
      const youtubeUrl = `https://www.youtube.com/watch?v=${trailerKey.key}`;
      window.open(youtubeUrl, "_blank");
    } else {
      alert("Trailer Not Available");
    }
  };

  if (!movieDetail) return <LoaderShimmerUi />;
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
            <div className="timeFrame">
              <img src={releasedIcon} alt="" />
              <p>{movieDetail.status}</p>
            </div>
            <div className="timeFrame">
              <img src={ratingIcon} alt="" />
              <p>{movieDetail.vote_average}/10</p>
            </div>
          </div>
          <div className="redCta watchTrailerBtn" onClick={trailerHandler}>
            <button>Watch Trailer</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMoviePage;
