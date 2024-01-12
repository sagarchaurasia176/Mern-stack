import React, { useState } from "react";
const apiKey = "ed5590de";
export default function MovieRendering() {

  const [Movies, setMovie] = useState([]);

  async function omdbapi(movieName, years) {
    try {
      const fetching = await fetch(
        `https://www.omdbapi.com/?t=${movieName}&y=${years}&apiKey=${apiKey}`
      );
      const response = await fetching.json();
      setMovie(response);
    } catch {
      console.error("!opps error");
    }
  }

  const apiCall = () => {
    let userType = document.querySelector("#searchInput").value.trim();
    console.log(omdbapi(userType));
  };

  return (
    <>
      <search className="search">
        <input
          type="text"
          class="search-input"
          placeholder="Search..."
          id="searchInput"
        />
        <button
          type="click"
          class="search-button"
          id="searcBtn"
          onClick={apiCall}
        >
          Search
        </button>
      </search>
      <div className="movieData">
        {Movies.map((MoviesData) => (
          <img src={MoviesData.Poster}></img>
        ))}
      </div>
    </>
  );
}
