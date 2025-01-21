import React from "react";

const VideoPlayer = ({ id }) => {
  return (
    <div className="">
      <iframe
        className=""
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        autoPlay="1"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
