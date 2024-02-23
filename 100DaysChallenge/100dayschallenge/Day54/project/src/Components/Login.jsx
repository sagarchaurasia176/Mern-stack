import React, { useContext, useState } from "react";
import userContexts from "../Context/Data";

function Login() {
  //Data get from the fields
  const [userName, setName] = useState("");
  const [userPass, setPass] = useState("");

  //data and setData values to be get
  const { setData } = useContext(userContexts);

  //passing the data from the one files to the another files
  function dataSend(e) {
    // prevent deafualt
    e.preventDefault();
    //provider the data passed
    setData({ userName, userPass });
  }
  return (
    <>
      <div className=" m-auto ml-96 my-12">
        <h1 className=" text-blue-600 font-semibold">Login form</h1>
        <label for="username">Username:</label>
        <br></br>

        <input
          type="text"
          id="username"
          name="username"
          required
          value={userName}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className=" outline-dotted"
        />
        <br></br>
        <label for="password">Password:</label>
        <br></br>

        <input
          type="password"
          className=" outline-dotted"
          id="password"
          name="password"
          required
          onChange={(e) => {
            setPass(e.target.value);
          }}
          value={userPass}
        />

        <br></br>
        <br></br>

        <button
          onClick={dataSend}
          className=" bg-slate-500 p-2 cursor-pointer "
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
