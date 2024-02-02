import React from "react";
// import { filterData } from "./Filter";
const CourseBtn = ({filterData}) => {
  return (
    <div className="button-component m-auto bg-black p-5 flex justify-evenly">
      {filterData.map((filterDatas) => {
        return <button key={filterDatas} className=" text-white p-2 bg-blue-400  w-40  rounded-md">
          {filterDatas.title}</button>
      })};
    </div>
  );
}
export default CourseBtn;
