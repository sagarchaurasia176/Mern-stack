import React from "react";
import FilterDataPassToSearch from "./FilterDataPassToSearch";
import Img from '../Img/Banner.jpg'

function FinderSearch({ searchCall }) {
  return (
    <div className=" container m-auto p-2">

    <img 
    style={{
      width:'1000%',
      height:'80vh',
      opacity:'0.3'
    }}
    src={Img} alt="" />

      <input
        style={{
          position:'absolute',
          marginTop:'-20rem',
          padding:'1.2rem',
          marginLeft:'12rem',
        }}
        type="text"
        className=" w-2/3 p-2 outline-none ml-28 "
        placeholder="type your  food here"
        onChange={(e) => {
        
          //the data is fetched here
          searchCall(e.target.value);
        }}
      />
      <FilterDataPassToSearch data={searchCall} />
    </div>
  );
}

export default FinderSearch;
