import React from "react";
import "./main.css";
async function ApiFoodCorner(query) {
  try {
    const ApiFetchUrl = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`
    );
    const urlConvrt = await ApiFetchUrl.json();
    return urlConvrt.meals;
  } catch {
    throw new Error("!oops error");
  }
}
const btnClickHandler = async () => {
  try {
    const userInput = document.getElementById("searchInput").value.trim();
    const data = await ApiFoodCorner(userInput);
      mealData(data)
  } catch (error) {
    console.error(error.message);
  }
};

export default function DisplayData() {
  // dataStored();

  return (
    <>
      <div className="container">
        <header className="heads">
          <h1>Foody corner</h1>
        </header>
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
            onClick={btnClickHandler}
          >
            Search
          </button>
        </search>
        <table className="table-auto ">
          <thead>
            <tr>
              <th>Meal Id</th>
              <th>Food Img</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {me.map((item) => {
              <tr id={item.idMeal}>
                <td>{item.idMeal}</td>
                <td>Data Not fetch</td>
                <td>Data Not fetch</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
