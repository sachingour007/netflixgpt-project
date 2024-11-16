import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const MovieSuggestionPage = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <section className="moviesList">
      <div className="wrapper">
        {movies && (
          <>
            <MoviesList
              title={"Now Playing Movies"}
              movies={movies?.nowPlayingMovies}
            />
            <MoviesList
              title={"Popular Movies"}
              movies={movies?.popularMovies}
            />
            <MoviesList title={"Top Rated"} movies={movies?.topRatedMovies} />
            <MoviesList
              title={"Upcoming on Netflix"}
              movies={movies?.upcomingMovies}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default MovieSuggestionPage;
