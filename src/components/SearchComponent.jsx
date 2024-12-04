import React, { useState, useEffect } from "react";
import { API_OPTION } from "../utils/constant";

const SearchComponent = () => {
  const [searchResult, setSearchResult] = useState();

  const getSearchResult = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=boby&include_adult=true&language=en-US&page=1",
      API_OPTION
    );
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    getSearchResult();
  }, []);

  return <div>SearchComponent</div>;
};

export default SearchComponent;
