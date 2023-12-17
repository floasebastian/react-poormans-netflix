import React from "react";

export const ThemeWrapper = (props) => {
  return (
    <div className={`${props.isLoading ? "h-[1000]" : ""} bg-white text-gray-900 dark:bg-slate-800 dark:text-white ${props.className}`}>
      {props.children}
    </div>
  );
};
