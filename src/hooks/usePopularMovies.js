import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  // fetch data from TMDB data API and update store
  const dispatch = useDispatch();
  const { popularMovies, popularPagination } = useSelector(
    (store) => store.movies
  );

  const getPopularMovies = async (pageNumber) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=${pageNumber}`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies(popularPagination);
    // eslint-disable-next-line
  }, [popularPagination]);

  return { popularMovies }; // Return page and setter
};

export default usePopularMovies;
