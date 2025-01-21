import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, title, id }) => {
  const navigate = useNavigate();

  const handleMovieCardClicked = () => {
    navigate("/info/" + id);
  };
  return (
    <div>
      <div className="w-36 md:w-48 cursor-pointer">
        {posterPath ? (
          <img
            src={IMAGE_CDN_URL + posterPath}
            alt="movie-poster"
            className="rounded-md"
            onClick={handleMovieCardClicked}
          />
        ) : (
          <div className="border-2 border-black rounded-md">
            <span className="text-white m-auto text-center">{title}</span>
            <img
              src="https://media.istockphoto.com/id/1299120566/vector/film-clapperboard-isolated-on-white-background-blank-movie-clapper-cinema-vector.jpg?s=612x612&w=0&k=20&c=rGwaBi2selAIab9UW5dHBipIh1URjF__3IEATmalMvM="
              alt="movie-poster"
              className="rounded-md w-48"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
