import React from "react";
import Girl from "../Logo/Girl-1.png";

function Home() {

  return (
    <>
      <div className="container p-2  flex justify-between">
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
            dolorum ut nisi.  Lorem ipsum, dolor sit amet consectetur adipisicing 
          </p>
          <button className="  bg-green-400  text-white text-center  font-light rounded-lg text-2xl p-3 ">
            {" "}
            Find Courses
          </button>
        </div>
        <div className="image">
          <img src={Girl} alt="" />
        </div>


      </div>
    </>
  );
}

export default Home;
