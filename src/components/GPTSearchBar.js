import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GEMINI_API_KEY } from "../utils/constants";
import { addGPTMovieResults } from "../utils/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GPTSearchBar = () => {
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
    try {
      const gptQuery =
        "Act as a Movie recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        " only give me names of 5 movies, comma separate like the example result give ahead: Example Result: Gadar, Sholay, Don, Golmal, Koo Mil Gaya";

      // call gemini api and get movie results

      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent(gptQuery);
      console.log("API response", result.response.text());

      // TODO: need to update value coming from gptResults

      const gptMovieList = result.response.text().split(",");

      // search TMDB API for every movie
      const promiseArray = gptMovieList.map((movie) => searchMovieTMDB(movie));
      // [Promise, Promise, Promise, Promise, Promise]

      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        addGPTMovieResults({
          movieNames: gptMovieList,
          movieResults: tmdbResults,
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-[40%] md:pt-[6%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
      >
        <input
          className="p-4 m-4 rounded-md col-span-9"
          type="text"
          placeholder={lang[selectedLanguageKey].gptSearchPlaceholder}
          ref={searchText}
        />
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
