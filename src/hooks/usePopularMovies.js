import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  // fetch data from TMDB data API and update store
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const [pagePopularMovies, setPagePopularMovies] = useState(1); // Manage page state

  const getPopularMovies = async (pageNumber) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?page=${pageNumber}`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies(pagePopularMovies);
    // eslint-disable-next-line
  }, [pagePopularMovies]);

  return { popularMovies, pagePopularMovies, setPagePopularMovies }; // Return page and setter
};

export default usePopularMovies;
