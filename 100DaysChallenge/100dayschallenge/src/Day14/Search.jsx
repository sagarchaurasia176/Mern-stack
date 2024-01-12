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

      //anytime while you end your function on that case used the return
      return response;
    } catch {
      console.error("!opps error");
    }
  }

  //boorow code from chatgpt
  const apiCall = async () => {
    let userType = document.querySelector("#searchInput").value.trim();
    const movieData = await omdbapi(userType);

    if (userType == "") {
      let text = document.createElement("p");
      text.innerHTML = "😁Please Write any movie Name";
      setTimeout(() => {
        text.remove();
      }, 1000);
      document.body.append(text);
    } else if (userType) {
      let text = document.createElement("p");
      text.innerHTML = "searching...";
      setTimeout(() => {
        text.remove();
      }, 1000);
      setMovie([movieData]);
      document.body.append(text);
    } else {
      console.log("error");
    }
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
        {Movies.map((MoviesDatas) => (
          <>
            <img
              key={MoviesDatas.imdbID}
              src={MoviesDatas.Poster}
              alt="posters"
            ></img>
            <h3>{MoviesDatas.Title}</h3>
            <h5>{MoviesDatas.Year}</h5>
          </>
        ))}
      </div>
    </>
  );
}
