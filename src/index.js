import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import { Bookmark } from "./Pages/Bookmark";
import { History } from "./Pages/History";
// import { Navbar } from "./Components/Navbar/Navbar";
import { MovieDetail } from "./Pages/MovieDetail";
import { Layout } from "./Components/Layout/Layout";
import { favicon } from "./Constants";


const root = ReactDOM.createRoot(document.getElementById("root"));
const favElm= document.getElementById("favicon");

favElm.href = window.location.href + favicon;

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/history" element={<History />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  </HashRouter>
);
