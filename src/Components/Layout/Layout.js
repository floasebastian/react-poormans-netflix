import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { ThemeWrapper } from "../Wrapper";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = (props) => {
  return (
    <ThemeWrapper>
      <Navbar />
      <Outlet />
      <Footer />
    </ThemeWrapper>
  );
};
