import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const selectedLanguageKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[6%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 rounded-md col-span-9"
          type="text"
          placeholder={lang[selectedLanguageKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 rounded-md bg-red-700 text-white col-span-3">
          {lang[selectedLanguageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
