import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMovieDetail from "../hooks/useMovieDetail";
import { useDispatch, useSelector } from "react-redux";
import { MOVIE_IMG_URL, MOVIE_IMG_URL500 } from "../utils/constant";
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
import useCastDetails from "../hooks/useCastDetails";
import useRecommendedMovie from "../hooks/useRecommendedMovie";
import LoaderShimmerUi from "../components/LoaderShimmerUi";
import { popularityCalFunction } from "../utils/customFunction";
import CastingCard from "../components/CastingCard";
import MoviesCard from "../components/MoviesCard";

const SingleMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allMovieDetail = useSelector((store) => store.singleMovieDetails);
  const { singleMovieDetail } = allMovieDetail;
  const trailerKey = useSelector((store) => store.movies?.detailsPageTrailer);
  const castDetails = useSelector(
    (store) => store.singleMovieDetails.singleMovieCastDetail
  );
  const getRecommendedMovi = useSelector(
    (store) => store.singleMovieDetails.recommendedMovies
  );
  useMovieDetail(id);
  useMoviesTrailer(id);
  useCastDetails(id);
  useRecommendedMovie(id);

  useEffect(() => {
    dispatch(singlePageReset());
  }, []);

  const backHandler = () => {
    navigate("/browse");
  };

  const isLoading = !singleMovieDetail || !getRecommendedMovi || !castDetails;
  if (isLoading) return <LoaderShimmerUi />;

  return (
    <>
      <section className="trailerContainer">
        <div className="secWrapper">
          <div className="backCta" onClick={backHandler}>
            <img src={leftArrow} alt="" />
            <p>Back to Homepage</p>
          </div>
          <div className="HeadBox">
            <div className="movieHeadingBox">
              <div className="heading">
                <h2>{singleMovieDetail.title}</h2>
              </div>
              <div className="subHeadings">
                <ul>
                  <li>
                    {new Date(singleMovieDetail.release_date).getFullYear()}
                  </li>
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
          <div className="imgAndtrailerBox">
            <div className="imgBox">
              <img
                src={MOVIE_IMG_URL500 + singleMovieDetail?.poster_path}
                alt=""
              />
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
            <p>
              <span>Storyline</span>
              {singleMovieDetail.overview}
            </p>
          </div>
          <div className="castDetailContainer">
            <p>Top Cast</p>
            <div className="castBox">
              {castDetails?.cast.slice(0, 12).map((actor) => (
                <CastingCard key={actor.id} {...actor} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="moreMovieSuggestionSec">
        <div className="secWrapper">
          <div className="secHeading">
            <p>More like this</p>
          </div>
          <div className="recMovieContainer">
            {getRecommendedMovi.slice(0, 5).map(({ id, poster_path }) => (
              <MoviesCard
                key={id}
                posterPath={MOVIE_IMG_URL + poster_path}
                movieId={id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleMoviePage;
