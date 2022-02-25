import Navbar from "./Navbar";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";
function Content() {
  return (
    <main className="flex-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </main>
  );
}
export default Content;
