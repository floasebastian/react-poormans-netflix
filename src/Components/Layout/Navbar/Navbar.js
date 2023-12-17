import React from "react";
import { NavContent } from "./NavContent";
import { BtnMode } from "../../Buttons/Btn_mode";
import { Outlet } from "react-router-dom";
import { ThemeWrapper } from "../../Wrapper";

// const NavContent = ({Name, href}) => {
//   const color = Name == "HOME" ? "text-blue-200" : "text-white";
//   const Tag = href ? 'a' : 'div';
//   return (
//     <Tag className={`px-5 hover:bg-cyan-700 cursor-pointer ${color} h-auto`}>
//       <h1>{Name}</h1>
//     </Tag>
//   );
// };

export const Navbar = () => {
  return (
    <ThemeWrapper>
      <nav className="flex h-16 overflow-hidden w-full justify-between">
        <div className="pl-10">
          <NavContent isLogo/>
        </div>
        <div className="flex self-center gap-6 pr-10">
          <NavContent ContentName="BOOKMARK" />
          <NavContent ContentName="HISTORY" />
          <BtnMode />
        </div>
      </nav>
    </ThemeWrapper>
  );
};
