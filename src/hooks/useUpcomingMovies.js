import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  // fetch data from TMDB data API and update store
  const dispatch = useDispatch();
  const { upcomingMovies, upcomingPagination } = useSelector(
    (store) => store.movies
  );

  const getUpcomingMovies = async (pageNumber) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?page=${pageNumber}`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies(upcomingPagination);
    // eslint-disable-next-line
  }, [upcomingPagination]);

  return { upcomingMovies };
};

export default useUpcomingMovies;
