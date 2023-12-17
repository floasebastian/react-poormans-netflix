import React, { useEffect } from "react";
import { ThemeWrapper } from "../Wrapper";
import { devs } from "../../Constants";

export const Footer = () => {
  return (
    <div className="w-full h-32 bg-slate-700 text-center">
      <h1 className="text-white font-extrabold">POORMAN NETFLIX</h1>
      <div id="footer-content" className="text-white">
        <h3>Created with 	&#128513; by:</h3>
        <ul>
        {
          devs.map((dev)=>{
            return (
            <li key={dev.name}>
              <a target="__blank" href={dev.github}> &#187; {dev.name}</a>
            </li>
          )
          })
        }
        </ul>
      </div>
    </div>
  );
};
