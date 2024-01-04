import React from "react";
import "./main.css";
 async function ApiFoodCorner(query){
    try{
    let ApiFetchUrl =await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s={query}')
   let urlConvrt = await ApiFetchUrl.json();
    console.log(urlConvrt)
  }
  catch{
      throw new Error ("!oops error");
  }

}

  function BtnClick(){
      let searchBtn = document.getElementById('searcBtn');
      searchBtn.addEventListener('click' , ()=>{
          let userType = document.getElementById('searchInput');
          let DataGetFromType = userType.value.trim();
          console.log(ApiFoodCorner(DataGetFromType));
      })
  }
 

export default function Renderingcomponents() {
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
          <button type="click" class="search-button" id="searcBtn" onClick={BtnClick}>
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
              <td>Data not </td>
              <td>Data Not fetch</td>
              <td>Data Not fetch</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
