import React, { useState } from "react";
import { toast } from "react-toastify";

function Student() {
  //useState data
  const [userData, setData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    country: "",
    comments: "",
    checkbox: "",
  });


  //data retrived here
      const dataRetrived = (e) => {
        e.preventDefault();

        const{name , value , checked , type} = e.target;
        //this () is used to get the setData here so what we gonna do here
        setData((data)=>( {...data , [name] : type === 'checkbox' ? checked : value}    ))

};

  //data stor vlaues here when I caling this functions then something happend
  const dataStor = () => {
    console.log(userData);
    if (!userData) {
      toast.warning("pls fill the form");
    } else {
      toast.success("!you're data stored");
    }
  };

  return (
    <div>
      <div class=" bg-slate-400 p-8 m-auto  my-9 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-6">Register</h2>

        {/* registeration form  */}
        <form onSubmit={dataStor}>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label
                for="first-name"
                class="block text-gray-700 font-semibold mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                onChange={dataRetrived}
                value={userData.firstName}
                class="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label
                for="lastName"
                class="block text-gray-700 font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                onChange={dataRetrived}
                id="last-name"
                name="lastName"
                value={userData.lastName}
                class="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>
          <div class="mb-4">
            <label
              for="username"
              class="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              onChange={dataRetrived}
              id="username"
              value={userData.username}
              name="username"
              class="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div class="mb-4">
            <label for="country" class="block text-gray-700 font-semibold mb-2">
              Country
            </label>

            <select
              value={userData.country}
              onChange={dataRetrived}
              className=" w-full p-2"
            >
              <option>India</option>
              <option>pakistan</option>
              <option>Japan</option>
            </select>
          </div>

          <div class="mb-6">
            <label
              for="confirm-password"
              class="block text-gray-700 font-semibold mb-2"
            >
              Comments
            </label>

            <input
              type="checkbox"
              checked={userData.checkbox}
              onChange={dataRetrived}
            />
            <span>
              get notified whene someine posts a comment on a positingx
            </span>
            <br></br>
            <input
              type="checkbox"
              onChange={dataRetrived}
              checked={userData.checkbox}
            />
            <span>get notified whene candidates apply for the job</span>
            <br></br>

            <input
              type="checkbox"
              onChange={dataRetrived}
              checked={userData.checkbox}
            />
            <span>
              get notified whene candidates accepts or reject an offer
            </span>
          </div>

          <div class="flex items-center mb-4">
            <input
              type="checkbox"
              id="agree"
              onChange={dataRetrived}
              name="agree"
              class="mr-2"
              checked={userData.checkbox}
            />
            <label for="agree" class="text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>

          <div class="mt-6">
            <button class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Student;
