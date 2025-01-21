import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMoviewTrailer = (movieId) => {
  const dispatch = useDispatch();

  // get trailer video && updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );

    const json = await data.json();

    const filterTrailers = json?.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
    // eslint-disable-next-line
  }, [movieId]);
};

export default useMoviewTrailer;
