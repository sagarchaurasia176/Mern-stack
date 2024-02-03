import React, { useEffect , useState} from "react";
import "../App.css";
import Navbar from "./Navbar";
import CourseBtn from "./CourseBtn";
import { filterData, ApiUrl } from "./Filter";
import {toast} from 'react-toastify';
import CardData from "./CardData";
const [data, setData] = useState(null);

function TopCoursePage() {
    useEffect(() => {
        const apiData = async () => {
          try {
            const courseData = await fetch(ApiUrl);
            const courseDatas = await courseData.json();
            setData(courseDatas.data)
          } catch {
            toast.error("!oops something wrong")
        }
        };
        //call the api here
        apiData();
      }, [])

  return (
    <>
      <div className="container-1 w-5/6 m-auto bg-slate-800">
        <Navbar />
        <CourseBtn filterData={filterData} />
        <div className=" grid grid-cols-3 grid-rows-3">
            <CardData apiDatas = {data}/>
            </div>
      </div>
    </>
  );
}

export default TopCoursePage;
