import React, { Component, useEffect, useState } from "react";

export const BtnBookmark = ({hidden}) => {
  const [isBookMarked, setIsBookMarked] = useState(false);

  const onclick = (e) =>{
    e.stopPropagation();
    setIsBookMarked(!isBookMarked);
  }

  return (
    <div  className={`rounded-full p-2 h-10 w-10 bg-black/[.7] hover:cursor-pointer hover:bg-blue-900/[.7] ${hidden ? "hidden" : ''}`} onClick={onclick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={isBookMarked ? "white" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="w-full h-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
        />
      </svg>
    </div>
  );
};
