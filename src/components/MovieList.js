import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="py-2 ">
      <h1 className="text-2xl py-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div>
          <div className="flex gap-2">
            {movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
