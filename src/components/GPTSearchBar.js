import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";
import { addGPTMovieResults } from "../utils/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GPTSearchBar = ({ loading, setLoading }) => {
  const dispatch = useDispatch();

  const selectedLanguageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //  search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    setLoading(true);
    try {
      const gptQuery =
        "Act as a Movie recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        " only give me names of 5 movies, comma separate like the example result give ahead: Example Result: Gadar, Sholay, Don, Golmal, Koo Mil Gaya";

      // call gemini api and get movie results

      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(gptQuery);

      // TODO: need to update value coming from GEMINI

      const gptMovieList = result.response.text().split(",");

      // search TMDB API for every movie
      const promiseArray = gptMovieList.map((movie) => searchMovieTMDB(movie));
      // [Promise, Promise, Promise, Promise, Promise]

      const tmdbResults = await Promise.all(promiseArray);
      setLoading(false);

      dispatch(
        addGPTMovieResults({
          movieNames: gptMovieList,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // clear search box and results
  const handleClear = () => {
    if (searchText.current) {
      searchText.current.value = ""; // Clear the actual input

      dispatch(
        addGPTMovieResults({
          movieNames: null,
          movieResults: null,
        })
      );
    }
  };

  const toggleIconVisibility = () => {
    const clearIcon = searchText.current?.nextElementSibling;
    if (clearIcon) {
      clearIcon.classList.toggle("hidden", !searchText.current.value);
    }
  };

  return (
    <div className="pt-[40%] md:pt-[6%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2  grid grid-cols-12"
      >
        <div className="relative col-span-9 m-4 shadow-md">
          <input
            className="p-2 w-full rounded-md shadow-md"
            type="text"
            placeholder={lang[selectedLanguageKey].gptSearchPlaceholder}
            ref={searchText}
            onInput={toggleIconVisibility}
          />

          {/* Clear Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer hidden"
            onClick={handleClear}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        <button
          className="py-2 px-4 m-4 rounded-md bg-red-700 text-white col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[selectedLanguageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
