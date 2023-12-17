import React from "react";
import logo from "../../../img/logo.png";
import { Link } from "react-router-dom";

export const NavContent = (props) => {
  const { color, ContentName, isLogo, ...otherProps } = props;
  const Tag = props.href ? "a" : "div";
  
  return (
    <Link to={`/${ContentName ? ContentName.toLowerCase() : ''}`}>
      <Tag
        {...otherProps}
        className={`h-full cursor-pointer ${props.color} text-gray-800 dark:text-white font-bold hover:text-blue-500 dark:hover:text-blue-500`}
      >
        {props.isLogo ? (
          <div
            style={{ "--image": `url(${logo})`, height: "100%", width: "100%" }}
            className="bg-[image:var(--image)] aspect-square bg-cover"
          ></div>
        ) : (
          <span className="h-full">{props.ContentName}</span>
        )}
      </Tag>
    </Link>
  );
};
