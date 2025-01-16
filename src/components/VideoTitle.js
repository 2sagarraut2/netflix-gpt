import React from "react";
import { INFOICON, PLAYICON } from "../utils/constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-[#222222]">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="flex gap-2">
        <button className="py-2 px-8 rounded-md text-black bg-white flex justify-center items-center gap-2 font-bold hover:opacity-80">
          {PLAYICON}
          <span>Play</span>
        </button>
        <button className="py-2 px-8 rounded-md bg-slate-600 text-white bg-opacity-70 flex justify-center items-center gap-2 font-bold hover:opacity-80">
          {INFOICON}
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
