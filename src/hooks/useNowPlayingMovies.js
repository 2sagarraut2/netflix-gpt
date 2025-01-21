import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const [pageNowPlaying, setPageNowPlaying] = useState(1); // Manage page state

  const getNowPlayingMovies = async (pageNumber) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?page=${pageNumber}`,
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies(pageNowPlaying);
    // eslint-disable-next-line
  }, [pageNowPlaying]);

  return { nowPlayingMovies, pageNowPlaying, setPageNowPlaying }; // Return page and setter
};

export default useNowPlayingMovies;
