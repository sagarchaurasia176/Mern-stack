import React, { useState } from "react";
import Img from "../Img/Student.avif";

function Login() {
  const [userData, setData] = useState({ username: " ", password: "" });

  function clickSubmit() {
    setData((data) => ({
      ...data,
      //now we want to get the object and it's key values
      [data.target.name]: data.target.value,
    }));
  }

  return (
    <>
      <div className="grid  grid-cols-2 gap-4">
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis deleniti magni.</p> */}
        <div className=" mx-auto w-3/4">
          <h1 className="text-2xl font-semibold text-white mb-4">
            Registration Form
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            numquam officia qui!
          </p>
          <form
            // onClick={runData}
            className=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="email"
                name="username"
                value={userData.username}
                placeholder="username"
                onChange={clickSubmit}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                onChange={clickSubmit}
                value={userData.password}
                placeholder="********"
              />
            </div>
            <div className="flex items-center justify-end">
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <br></br>
            <button
              className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <br></br>
          </form>
        </div>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis deleniti magni.</p> */}
        <div>
          <img className=" w-4/5  animate-pulse" src={Img} alt="image" />
        </div>
      </div>
    </>
  );
}

export default Login;
