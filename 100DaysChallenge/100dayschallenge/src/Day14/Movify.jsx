import React from "react";
import "./Moviy.css";
import MovieRendering from "./Search/Search";
export default function Moviefys() {
  return (
    <>
      <div className=" container text-white text-center">
        <div className="header">
          <div className="logo">
            <div className="text">MovieFy</div>
          </div>
          <div className="navbar">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">New Movie</a>
              </li>
              <li>
                <a href="#">Old Movie</a>
              </li>
              <li>
                <a href="#">Upcoming Movie</a>
              </li>
            </ul>
          </div>
        </div>
        <MovieRendering />
      </div>

      {/* search container */}
    </>
  );
}
