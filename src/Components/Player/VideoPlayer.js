import React, { useEffect, useState } from "react";
import ReactPlayer from 'react-player';

export const VideoPlayer = ({ videoData }) => {
  return (
    <div className="w-full md:h-full md:w-full">
      {videoData && (
       <ReactPlayer width={`100%`} height={`100%`} url={`https://www.youtube.com/watch?v=${videoData}?start=0`} muted/>
      )}
    </div>
  );
};
