export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
  },
};

export const MOVIE_IMG_URL = "https://image.tmdb.org/t/p/w300";
export const MOVIE_IMG_URL500 = "https://image.tmdb.org/t/p/w500";
