import React from "react";
import "./main.css";
export default function Renderingcomponents() {
  const mealFood = async (query) => {
    try {
      const dataApi = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const response = await dataApi.json();
      console.log(response);
    } catch {
      throw new Error("!oops ");
    }
    // last stopsed of the functions
  };
  //btn response

  function btnClick() {
    let userRespon = document.querySelector(".search-input");
    if (userRespon) {
      let dataGet = userRespon.value.trim();
      mealFood(dataGet);
    }
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>Foody corner</h1>
        </header>
        <search className="search">
          <input type="text" class="search-input" placeholder="Search..." />
          <button
            type="submit"
            class="search-button"
            id="searcBtn"
            onClick={btnClick}
          >
            Search
          </button>
        </search>
        <table className="table-auto ">
          <thead>
            <tr>
              <th>Meal Id</th>
              <th>Food Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr</td>
              <td>Malcol</td>
              <td>1961</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
