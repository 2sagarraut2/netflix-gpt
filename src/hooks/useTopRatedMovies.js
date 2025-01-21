import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  // fetch data from TMDB data API and update store
  const dispatch = useDispatch();
  const { topRatedMovies, topRatedPagination } = useSelector(
    (store) => store.movies
  );

  const getTopRatedMovies = async (pageNumber) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?page=${pageNumber}`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies(topRatedPagination);
    // eslint-disable-next-line
  }, [topRatedPagination]);

  return { topRatedMovies };
};

export default useTopRatedMovies;
