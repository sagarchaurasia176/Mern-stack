import React from "react";
import "./Moviy.css";

export default function Moviefys() {
  return (
    <>
      <div className=" container">
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
      </div>
    </>
  );
}
