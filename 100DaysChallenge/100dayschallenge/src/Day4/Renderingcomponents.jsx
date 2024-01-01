import React from "react";
import "./main.css";
export default function Renderingcomponents() {
  const mealFood = async (query) => {
    try {
      const dataApi = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const response = await dataApi.json();
    } catch {
      throw new Error("!oops ");
    }
    // last stopsed of the functions
  };
  //btn response
  const searchBtn = document.getElementById('searchBar');
  const btn = document.getElementById('searcBtn');
  btn.addEventListener('click' , ()=>{
    const inputOFUser=searchBtn.value.trim();
    mealFood(inputOFUser)    
    })
    // dataStored();
  return (
    <>
      <div className="container">
        <header>
          <h1>Foody corner</h1>
        </header>
        <search className="search">
          <input type="text" class="search-input" placeholder="Search..." id="searchBar" />
          <button type="click" class="search-button" id="searcBtn">
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
            <tr>
              <td>Data Not fetch</td>
              <td>Data Not fetch</td>
              <td>Data Not fetch</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
