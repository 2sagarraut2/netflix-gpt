import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const { nowPlayingPagination, nowPlayingMovies } = useSelector(
    (store) => store.movies
  );

  const getNowPlayingMovies = async (pageNumber) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?page=${pageNumber}`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies(nowPlayingPagination);
    // eslint-disable-next-line
  }, [nowPlayingPagination]);

  return { nowPlayingMovies }; // Return page and setter
};

export default useNowPlayingMovies;
