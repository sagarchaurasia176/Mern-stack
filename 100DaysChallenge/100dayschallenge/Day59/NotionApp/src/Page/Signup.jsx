import React, { useState } from "react";
import Study from "../Img/Study.avif";
import toast from "react-hot-toast";

function Signup() {
  //form verifications concepts
  const [userData, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: null,
  });

  //handler the functions
  const tabHandler = (e) =>
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value,
    }));

  //submit the form data
  const stored = (e) => {
    e.preventDefault();
    toast.success("Welcome back");
    console.log(userData);
  };

  return (
    <div>
      <h1 className="text-4xl  font-extrabold  text-white mb-4">
        Join the millions learning to <br />
        code with JMS for free
      </h1>

      <div className=" grid grid-cols-2">
        <div className="container-first ">
          <p>
            build skills for today , tomorrow and beyond
            <i className=" text-blue-400 ">
              {" "}
              Education to future-proof your career
            </i>
          </p>
          <br></br>

          <img src={Study} className="  animate-pulse" alt="study" />
          {/* form types */}
        </div>

        <div className="">
          <div className="btn bg-slate-400 w-1/3 m-auto rounded-lg text-center  flex p-2">
            <button class="  hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">
              Student
            </button>
            <button class="  hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">
              Instructor
            </button>
          </div>
          {/* <img src={Study} alt="" /> */}
          <form
            onSubmit={stored}
            className=" shadow-md rounded px-8 pt-6 pb-8 h-auto mb-4 w-2/3  bg-slate-50 m-auto"
          >
            <div class="mb-4 ">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="first-name"
              >
                First Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="first-name"
                type="text"
                placeholder="First Name"
                name="firstname"
                value={userData.firstname}
                required
                onChange={tabHandler}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="last-name"
              >
                Last Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="last-name"
                type="text"
                name="lastname"
                value={userData.lastname}
                onChange={tabHandler}
                placeholder="Last Name"
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={userData.email}
                onChange={tabHandler}
              />
            </div>
            <div class="mb-6">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                value={userData.password}
                onChange={tabHandler}
                placeholder="Password"
              />
            </div>
            <div class="flex items-center justify-between">
              <button class="  bg-yellow-300 text-black hover:bg-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Register
              </button>
            </div>
          </form>
        </div>
        {/* grid last values */}
      </div>
    </div>
  );
}
export default Signup;
