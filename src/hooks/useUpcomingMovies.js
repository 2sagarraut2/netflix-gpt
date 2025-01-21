import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  // fetch data from TMDB data API and update store
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const [pageUpcoming, setPageUpcoming] = useState(1); // Manage page state

  const getUpcomingMovies = async (pageNumber) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?page=${pageNumber}`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies(pageUpcoming);
    // eslint-disable-next-line
  }, [pageUpcoming]);

  return { upcomingMovies, pageUpcoming, setPageUpcoming };
};

export default useUpcomingMovies;
