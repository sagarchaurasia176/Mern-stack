import React from "react";

async function omdbapi(movieName, Dates) {
  const fetching = await fetch(
    `https://www.omdbapi.com/?i=tt3896198&apikey=ed5590de%20&t=${movieName}&y=${Dates}`
  );
  const response = await fetching.json().catch((er) => {
    console.log("!oops error");
  });
}

export default function MovieRendering() {
  return (
    <>
      <search className="search">
        <input
          type="text"
          class="search-input"
          placeholder="Search..."
          id="searchInput"
        />
        <button type="click" class="search-button" id="searcBtn">
          Search
        </button>
      </search>
    </>
  );
}
