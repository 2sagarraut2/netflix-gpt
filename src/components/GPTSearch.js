import React, { useState } from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BACKGROUNDIMAGE } from "../utils/constants";
import Loader from "./Loader";

const GPTSearch = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="fixed -z-10 ">
        <img
          src={BACKGROUNDIMAGE}
          alt="background-image"
          className="h-screen object-cover md:w-screen"
        />
      </div>
      <div className="">
        <GPTSearchBar loading={loading} setLoading={setLoading} />
        {loading && <Loader />}
        <GPTMovieSuggestions />
      </div>
    </div>
  );
};

export default GPTSearch;
