import React from "react";
import Girl from "../Logo/Girl-1.png";
import NextHeader from "../PageComponent/NextHeader";
import { FaLocationArrow } from "react-icons/fa";
// import About from "./About";
// 
function Home() {
  return (
    <>
      <div className=" ">
         <div className="container p-1 flex justify-between">

        <div className="text p-2  my-32 ">
          <h1 className=" text-red-700 text-5xl font-bold">Get 2500 +</h1>
          <h2 className=" text-black text-5xl p-3 font-extrabold ">
            <b>
              Best Online Courses <br />
              From Code Course
            </b>
          </h2>
          <p className=" text-black font-thin p-1  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            dolorum ut nisi. Lorem ipsum, dolor sit amet consectetur adipisicing
          </p>
          <button className=" mt-9 bg-green-400 transition-all animate-bounce  text-white text-center flex font-semibold rounded-lg text-2xl p-2 ">
            {" "}
            Find Courses <FaLocationArrow />
          </button>
        </div>
        <div className="image">
          <img src={Girl} alt="" />
        </div>
      </div>
 {/* nex components */}
      <NextHeader />

      </div>

 
    </>
  );
}

export default Home;
