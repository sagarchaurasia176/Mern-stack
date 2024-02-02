import React from "react";
// import { filterData } from "./Filter";
const CourseBtn = ({filterDatas}) => {
  return (
    <div className="button-component m-auto bg-black p-5 flex justify-evenly">
      {filterDatas.map((filterVlaue) => {
        return <button key={filterVlaue.id} className=" text-white p-2 bg-blue-400  w-40  rounded-md">{filterVlaue.title}</button>
      })};
    </div>
  );
}
export default CourseBtn;
