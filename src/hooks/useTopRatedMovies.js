import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  // fetch data from TMDB data API and update store
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const [pageTopRated, setPageTopRated] = useState(1); // Manage page state

  const getTopRatedMovies = async (pageNumber) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?page=${pageNumber}`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies(pageTopRated);
    // eslint-disable-next-line
  }, [pageTopRated]);

  return { topRatedMovies, pageTopRated, setPageTopRated };
};

export default useTopRatedMovies;
