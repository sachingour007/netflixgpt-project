import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_IMG_URL500 } from "../utils/constant";
import { singlePageReset } from "../store/movieSlice";
import {
  timeIcon,
  releasedIcon,
  ratingIcon,
  leftArrow,
} from "../assets/images";
import { formatRuntime } from "../utils/supportFunctions";
import useMoviesTrailer from "../hooks/useMoviesTrailer";
import LoaderShimmerUi from "../components/LoaderShimmerUi";

const SingleMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useMovieDetail(id);
  const navigate = useNavigate();
  const allMovieDetail = useSelector((store) => store.movies);
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
  const backHandler = () => {
    navigate("/browse");
  };

  if (!movieDetail) return <LoaderShimmerUi />;
  return (
    <>
      <section className="headingSec">
        <div className="secWrapper">
          <div className="backCta" onClick={backHandler}>
            <img src={leftArrow} alt="" />
            <p>Back to Homepage</p>
          </div>
          <div className="movieHeading"></div>
        </div>
      </section>
      <section className="trailerContainer">
        <div className="secWrapper">
          <div className="trailerBox">
            <iframe
              className="videoframe"
              src={"https://www.youtube.com/embed/" + trailerKey?.key}
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="mainContainer">
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
            {/* <div className="redCta watchTrailerBtn" onClick={trailerHandler}>
              <button>Watch Trailer</button>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleMoviePage;
