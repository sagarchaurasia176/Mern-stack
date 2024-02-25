import React, { useState } from "react";
import { toast } from "react-toastify";

function Form() {
  
  
  
  //just only for one state it's worked

  const [formData, setFromData] = useState({
    userName: "",
    userPassword:null,
    comments: "",
  });


  const formHandler = (e) => {
    //it's basically contained the prev state copy and update the next values
    setFromData((data) => {
      return {
        ...data,
        //it's the syntax here that is predefined into the form
        [e.target.name]: e.target.value,
      };
    });
  };

  //save data handler

  const saveDataHandler = (e) => {
    e.preventDefault();
    toast.success("data saved ");
    console.log("finally print");
    console.log(formData);
  };


  //state managemnet
  //==============================================================================
  //this is for username

  //specifically used this symbol => []

  return (
    <div>
      {/* code borrow from chatgpt */}
      <div class="max-w-md mx-auto my-32">
        <form
          onSubmit={saveDataHandler}
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              onChange={formHandler}
              name="userName"
              value={formData.userName}
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border  rounded w-full py-2 px-3  text-black   mb-3 "
              type="password"
              onChange={formHandler}
              name=" userPassword"
              value={formData.userPassword}
            />
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="feedback"
            >
              FeedBack
            </label>
            <textarea
              className="  w-4/5 p-2  shadow-lg outline-dotted"
              placeholder="write you're comments here"
              onChange={formHandler}
              name="comments"
              value={formData.comments}
            ></textarea>
          </div>

          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
