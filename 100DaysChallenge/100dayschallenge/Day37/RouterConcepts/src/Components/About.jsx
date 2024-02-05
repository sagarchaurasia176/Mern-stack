import React from "react";
import NextSec from "../Logo/NextSec.png";
import { FaRegCircleCheck } from "react-icons/fa6";
function About() {
  return (
    <>
      <div className="container p-1 grid grid-cols-2">
        <div className="image">
          <img className=" rounded-xl my-12 animate-pulse" src={NextSec} alt="" />
        </div>

        <div className="text p-2  my-12 ">
          <h1 className=" text-red-700 text-5xl font-bold">About us</h1>
          <h2 className=" text-black text-5xl p-3 font-extrabold ">
            <b>
              Learn & Grow Your Skills <br />
              From AnyWhere
            </b>
          </h2>
          <p className=" text-black font-thin p-1  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            dolorum ut nisi. Lorem ipsum, dolor sit amet consectetur adipisicing
            dolorum ut nisi. Lorem ipsum, dolor sit amet consectetur adipisicing
          </p>
          <li className=" list-none p-2">
            <FaRegCircleCheck />  
            <p><b>Expert Trainers</b></p>

          </li>{" "}
          <li className=" list-none p-2">
            <FaRegCircleCheck />
            <p><b>Online Remote Learnings</b></p>
          </li>{" "}
          <li className=" list-none p-2">
            <FaRegCircleCheck />
            <p><b>Lifetime Learners</b></p>
          </li>
          
        </div>
      </div>
    </>
  );
}

export default About;
