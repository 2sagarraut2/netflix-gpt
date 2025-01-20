import React from "react";
import { INFOICON, PLAYICON } from "../utils/constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-16 absolute text-white bg-gradient-to-r from-[#222222]">
      <h1 className="md:text-4xl text-2xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-2 text-lg w-1/2">{overview}</p>
      <div className="flex gap-2 mt-2">
        <button className="py-3 px-4 md:px-8 rounded-md text-black bg-white flex justify-center items-center gap-2 font-bold hover:opacity-80">
          {PLAYICON}
          <span>Play</span>
        </button>
        <button className="hidden md:flex py-3 px-8 rounded-md bg-slate-600 text-white bg-opacity-70 justify-center items-center gap-2 font-bold hover:opacity-80">
          {INFOICON}
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
