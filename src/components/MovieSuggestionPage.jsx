import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const MovieSuggestionPage = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    <section className="moviesList">
      <div className="wrapper">
        {movies && (
          <>
            <MoviesList title={"Now Playing Movies"} movies={movies} />
            <MoviesList title={"Trending Movies"} movies={movies} />
            <MoviesList title={"Popular on Netflix"} movies={movies} />
          </>
        )}
      </div>
    </section>
  );
};

export default MovieSuggestionPage;
