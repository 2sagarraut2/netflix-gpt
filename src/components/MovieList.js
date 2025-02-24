import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="py-2">
      <h1 className="text-lg md:text-2xl py-2 text-white">{title}</h1>
      <div className="flex justify-between items-center">
        <div className="flex overflow-x-scroll ">
          <div>
            <div className="flex gap-2">
              {movies?.map((movie) => (
                <MovieCard
                  key={movie.id}
                  id={movie.id}
                  posterPath={movie.poster_path}
                  title={movie.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
