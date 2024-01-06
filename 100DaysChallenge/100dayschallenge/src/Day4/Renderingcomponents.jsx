import React from "react";
import "./main.css";
import { useState } from "react";
let processing = document.createElement('p');
async function ApiFoodCorner(query) {
  processing.innerHTML = "your item is searching ....";
  document.querySelector('.container').appendChild(processing);

  try {
    const ApiFetchUrl = await fetch(
      ` https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    processing.innerHTML = '';

    const urlConvrt = await ApiFetchUrl.json();
    return urlConvrt.meals;
  } catch {
    throw new Error("!oops error");
  }
}
export default function DisplayData() {
  
  const [meals, setMeal] = useState([]);

  const btnClickHandler = async () => {
    let userInput = document.getElementById("searchInput").value.trim();
    try {
      const data = await ApiFoodCorner(userInput);
      setMeal(data);

    } catch (error) {
      // Handle error if needed
      console.log("!oops");
    }
  };



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
              <th>strArea</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
      
            {meals.map((item) => (
              <tr id={item.idMeal}>
                <td>{item.idMeal}</td>
                <td>
                  <img src={item.strMealThumb} />
                </td>
                <td>{item.strArea}</td>
                <td>{item.strCategory}</td>
              </tr>
            ))}
          
          </tbody>

        </table>
      </div>
    </>
  );
}
