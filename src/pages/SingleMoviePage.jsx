import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_IMG_URL500 } from "../utils/constant";
import { singlePageReset } from "../store/movieFullDeailSlice";
import {
  timeIcon,
  releasedIcon,
  ratingIcon,
  leftArrow,
  popularityIcon,
} from "../assets/images";
import { formatRuntime } from "../utils/customFunction";
import useMoviesTrailer from "../hooks/useMoviesTrailer";
import LoaderShimmerUi from "../components/LoaderShimmerUi";
import { popularityCalFunction } from "../utils/customFunction";

const SingleMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allMovieDetail = useSelector((store) => store.singleMovieDetails);
  const { singleMovieDetail } = allMovieDetail;
  const trailerKey = useSelector((store) => store.movies?.detailsPageTrailer);

  useMovieDetail(id);
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

  if (!singleMovieDetail) return <LoaderShimmerUi />;
  return (
    <>
      {/* <section className="headingSec">
        <div className="secWrapper">
          <div className="backCta" onClick={backHandler}>
            <img src={leftArrow} alt="" />
            <p>Back to Homepage</p>
          </div>
          <div className="movieHeading"></div>
        </div>
      </section> */}
      <section className="headingSec">
        <div className="secWrapper">
          <div className="movieHeadingBox">
            <div className="heading">
              <h2>{singleMovieDetail.title}</h2>
            </div>
            <div className="subHeadings">
              <ul>
                <li>{new Date(singleMovieDetail.release_date).getFullYear()}</li>
                <li>
                  <img src={timeIcon} alt="" />
                  {formatRuntime(singleMovieDetail.runtime)}
                </li>
              </ul>
            </div>
          </div>
          <div className="otherDetails">
            <div className="otherSubBox">
              <h4>RATING</h4>
              <div className="commonCard ratingBox">
                <img src={ratingIcon} alt="" />
                <p>{singleMovieDetail.vote_average.toFixed(1)}/10</p>
              </div>
            </div>
            <div className="otherSubBox">
              <h4>STATUS</h4>
              <div className="commonCard relesedBox">
                <img src={releasedIcon} alt="" />
                <p>{singleMovieDetail.status}</p>
              </div>
            </div>
            <div className="otherSubBox">
              <h4>POPULARITY</h4>
              <div className="commonCard popularityBox">
                <img src={popularityIcon} alt="" />
                <p>{popularityCalFunction(singleMovieDetail.popularity)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trailerContainer">
        <div className="secWrapper">
          <div className="imgBox">
            <img src={MOVIE_IMG_URL500 + singleMovieDetail?.poster_path} alt="" />
          </div>
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
          <div className="movieDetails">
            <div className="geners">
              <ul>
                {singleMovieDetail.genres.map((gener) => (
                  <li key={gener.id}>{gener.name}</li>
                ))}
              </ul>
            </div>
            <p>{singleMovieDetail.overview}</p>

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
