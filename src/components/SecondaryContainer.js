import React from "react";
import MovieList from "./MovieList";
import { useDispatch, useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import {
  nextPageNowPlaying,
  nextPagePopular,
  nextPageTopRated,
  nextPageUpcoming,
  prevPageNowPlaying,
  prevPagePopular,
  prevPageTopRated,
  prevPageUpcoming,
} from "../utils/moviesSlice";

const SecondaryContainer = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  const { nowPlayingPagination } = useSelector((store) => store.movies);
  const { nowPlayingMovies } = useNowPlayingMovies();

  const { popularPagination } = useSelector((store) => store.movies);
  const { popularMovies } = usePopularMovies();

  const { topRatedPagination } = useSelector((store) => store.movies);
  const { topRatedMovies } = useTopRatedMovies();

  const { upcomingPagination } = useSelector((store) => store.movies);
  const { upcomingMovies } = useUpcomingMovies();

  // Now playing pagination
  const handleNextPageNowPlaying = () => {
    dispatch(nextPageNowPlaying());
  };
  const handlePrevPageNowPlaying = () => {
    dispatch(prevPageNowPlaying());
  };

  // Popular movies pagination
  const handleNextPagePopular = () => {
    // setPagePopularMovies((prev) => prev + 1);
    dispatch(nextPagePopular());
  };
  const handlePrevPagePopular = () => {
    // setPagePopularMovies((prev) => Math.max(prev - 1, 1));
    dispatch(prevPagePopular());
  };

  // Top rated movies pagination
  const handleNextPageTopRated = () => {
    // setPageTopRated((prev) => prev + 1);
    dispatch(nextPageTopRated());
  };

  const handlePrevPageTopRated = () => {
    // setPageTopRated((prev) => Math.max(prev - 1, 1));
    dispatch(prevPageTopRated());
  };

  // Upcming movies pagination
  const handleNextPageUpcoming = () => {
    // setPageUpcoming((prev) => prev + 1);
    dispatch(nextPageUpcoming());
  };

  const handlePrevPageUpcoming = () => {
    // setPageUpcoming((prev) => Math.max(prev - 1, 1));
    dispatch(prevPageUpcoming());
  };

  return (
    movies && (
      <div className="bg-black ">
        <div className="md:px-4 mt-0 md:-mt-[15%] lg:-mt[20%] relative z-20">
          {/* Now Palying */}
          <div className="flex flex-wrap overflow-hidden">
            <button
              className="px-2 md:px-2 text-white rounded-lg cursor-pointer hover:opacity-50"
              onClick={handlePrevPageNowPlaying}
              disabled={nowPlayingPagination === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div className="flex-1 overflow-hidden">
              <MovieList
                title={"Now Playing"}
                movies={nowPlayingMovies}
                className=""
              />
            </div>
            <button
              className="px-2 md:px-2 text-white rounded-lg cursor-pointer hover:opacity-50"
              onClick={handleNextPageNowPlaying}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Popular Movies */}
          <div className="flex flex-wrap overflow-hidden">
            <button
              className="px-2 md:px-2 text-white rounded-lg cursor-pointer hover:opacity-50"
              onClick={handlePrevPagePopular}
              disabled={popularPagination === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div className="flex-1 overflow-hidden">
              <MovieList title={"Popular"} movies={popularMovies} />
            </div>
            <button
              className="px-2 md:px-2 text-white rounded-lg cursor-pointer hover:opacity-50"
              onClick={handleNextPagePopular}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Top rated movies */}
          <div className="flex flex-wrap overflow-hidden">
            <button
              className="px-2 md:px-2 text-white rounded-lg cursor-pointer hover:opacity-50"
              onClick={handlePrevPageTopRated}
              disabled={topRatedPagination === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div className="flex-1 overflow-hidden">
              <MovieList title={"Top Rated"} movies={topRatedMovies} />
            </div>
            <button
              className="px-2 md:px-2 text-white rounded-lg cursor-pointer hover:opacity-50"
              onClick={handleNextPageTopRated}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* Upcoming movies */}
          <div className="flex flex-wrap overflow-hidden">
            <button
              className="px-2 md:px-2 text-white rounded-lg cursor-pointer hover:opacity-50"
              onClick={handlePrevPageUpcoming}
              disabled={upcomingPagination === 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div className="flex-1 overflow-hidden">
              <MovieList title={"Upcoming"} movies={upcomingMovies} />
            </div>
            <button
              className="px-2 md:px-2 text-white rounded-lg cursor-pointer hover:opacity-50"
              onClick={handleNextPageUpcoming}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
