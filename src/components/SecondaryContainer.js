import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const { nowPlayingMovies, pageNowPlaying, setPageNowPlaying } =
    useNowPlayingMovies();
  const { popularMovies, pagePopularMovies, setPagePopularMovies } =
    usePopularMovies();
  const { topRatedMovies, pageTopRated, setPageTopRated } = useTopRatedMovies();
  const { upcomingMovies, pageUpcoming, setPageUpcoming } = useUpcomingMovies();

  // Now playing pagination
  const handleNextPageNowPlaying = () => setPageNowPlaying((prev) => prev + 1);
  const handlePrevPageNowPlaying = () =>
    setPageNowPlaying((prev) => Math.max(prev - 1, 1));

  // Popular movies pagination
  const handleNextPagePopular = () => setPagePopularMovies((prev) => prev + 1);
  const handlePrevPagePopular = () =>
    setPagePopularMovies((prev) => Math.max(prev - 1, 1));

  // Top rated movies pagination
  const handleNextPageTopRated = () => setPageTopRated((prev) => prev + 1);
  const handlePrevPageTopRated = () =>
    setPageTopRated((prev) => Math.max(prev - 1, 1));

  // Top rated movies pagination
  const handleNextPageUpcoming = () => setPageUpcoming((prev) => prev + 1);
  const handlePrevPageUpcoming = () =>
    setPageUpcoming((prev) => Math.max(prev - 1, 1));

  return (
    movies && (
      <div className="bg-black ">
        <div className="px-2 mt-0 md:px-16 md:-mt-[15%] lg:-mt[20%] relative z-20">
          {/* Now Palying */}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handlePrevPageNowPlaying}
            disabled={pageNowPlaying === 1}
          >
            Previous
          </button>
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handleNextPageNowPlaying}
          >
            Next
          </button>

          {/* Popular Movies */}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handlePrevPagePopular}
            disabled={pagePopularMovies === 1}
          >
            Previous
          </button>
          <MovieList title={"Popular"} movies={popularMovies} />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handleNextPagePopular}
          >
            Next
          </button>

          {/* Top rated movies */}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handlePrevPageTopRated}
            disabled={pageTopRated === 1}
          >
            Previous
          </button>
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handleNextPageTopRated}
          >
            Next
          </button>

          {/* Upcoming movies */}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handlePrevPageUpcoming}
            disabled={pageUpcoming === 1}
          >
            Previous
          </button>
          <MovieList title={"Upcoming"} movies={upcomingMovies} />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={handleNextPageUpcoming}
          >
            Next
          </button>
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
