import { useDispatch, useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";
import VideoPlayer from "./VideoPlayer";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { API_OPTIONS, IMAGE_CDN_URL } from "../utils/constants";
import { addMovieInfo } from "../utils/moviesSlice";
import Loader from "./Loader";

const MovieInfoPopup = () => {
  const movieVideos = useSelector((store) => store.movies.movieVideos);
  const dispatch = useDispatch();
  const movieInfo = useSelector((store) => store.movies.movieInfo);
  const { id } = useParams();
  const navigate = useNavigate();

  useMovieVideos(id);

  const handleClose = () => {
    navigate("/browse");
  };

  const getMovieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
      API_OPTIONS
    );

    const json = await data?.json();

    dispatch(addMovieInfo(json));
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 w-full md:p-4 ">
      {movieInfo ? (
        <div className="w-full h-full overflow-auto bg-black rounded-lg shadow-lg md:p-8">
          <div className="md:flex md:items-start flex">
            <div className="md:flex md:gap-5 md:mb-4">
              <div className="">
                <img
                  src={IMAGE_CDN_URL + movieInfo.poster_path}
                  alt="movie-poster"
                  className="rounded-md border-2 border-white aspect-auto"
                />
              </div>

              <div className="z-20">
                {movieInfo && (
                  <div className="my-4">
                    <p className="text-white md:text-4xl text-2xl font-bold">
                      {movieInfo.original_title}
                    </p>
                    <p className="text-white text-sm pb-4">
                      {movieInfo.tagline}
                    </p>
                    <p className="text-white md:w-1/2">{movieInfo.overview}</p>
                    <p className="text-white"></p>
                    <p className="text-white">
                      {movieInfo.status === "Released"
                        ? movieInfo.release_date
                        : ""}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={handleClose}
              className="text-white text-3xl font-bold hover:text-gray-300 transition"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-wrap">
            {movieVideos && movieVideos.length > 0 ? (
              movieVideos.map((video) => {
                return (
                  <div
                    key={video.key}
                    className="mb-4 flex py-2 shadow-md rounded-md mr-3 "
                  >
                    <div className="mr-4 w-min">
                      <p className="text-white text-base overflow-hidden">
                        {video.name}
                      </p>
                      <VideoPlayer id={video.key} />
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-center text-white">No videos available</p>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default MovieInfoPopup;
