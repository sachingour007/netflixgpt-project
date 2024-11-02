import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMovies } from "../store/movieSlice";
import { API_OPTION } from "../utils/constant";

const useNowPlayingMoies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const jsonData = await res.json();
    dispatch(addMovies(jsonData.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMoies;
