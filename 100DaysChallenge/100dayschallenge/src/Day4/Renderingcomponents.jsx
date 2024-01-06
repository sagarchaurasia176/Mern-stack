import React from "react";
import "./main.css";
import { useState } from "react";
async function ApiFoodCorner(query) {
  try {
    const ApiFetchUrl = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`
    );
    const urlConvrt = await ApiFetchUrl.json();
  } catch {
    throw new Error("!oops error");
  }
}
const btnClickHandler = () => {
    let userInput = document.getElementById('searchInput').value.trim();
    console.log(ApiFoodCorner(userInput))
  }

export default function DisplayData() {
  // dataStored();
  const [meals, setMeals] = useState([]);
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
            {meals.map((item)=>{
               <tr id={item.idMealid}>
               <td>{item.idMealid}</td>
               <td>{item.strIngredient1}</td>
               <td>{item.strMealThumb}</td>
             </tr>
            })}
           
          </tbody>
        </table>
      </div>
    </>
  );
}
