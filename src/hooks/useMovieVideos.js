import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieVideos } from "../utils/moviesSlice";

const useMovieVideos = (id) => {
  const dispatch = useDispatch();

  // get trailer video && updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const results = json.results.filter(
      (video) => video.type === "Teaser" || video.type === "Trailer"
    );

    dispatch(addMovieVideos(results));
  };

  useEffect(() => {
    getMovieVideos();
    // eslint-disable-next-line
  }, []);
};

export default useMovieVideos;
