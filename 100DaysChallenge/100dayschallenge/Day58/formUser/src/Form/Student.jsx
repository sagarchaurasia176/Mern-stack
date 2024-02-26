import React, { useState } from "react";
import {toast} from 'react-toastify';


function Student() {

    //useState data 
    const [userData , setData] = useState({firstName:'' , lastName:'' , username:'' , password:'' , country:'' , comments:'' });

  return (
    <div>
      <div class=" bg-slate-400 p-8 m-auto  my-9 rounded shadow-md w-96">
        <h2 class="text-2xl font-semibold mb-6">Register</h2>
        <form>
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
                name="first-name"
                class="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label
                for="last-name"
                class="block text-gray-700 font-semibold mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
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
              id="username"
              name="username"
              class="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div class="mb-4">
            <label
              for="password"
              class="block text-gray-700 font-semibold mb-2"
            >
              Country
            </label>

            <select className=" w-full p-2">
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

            <input type="checkbox" />
            <span>
              get notified whene someine posts a comment on a positingx
            </span>
            <br></br>
            <input type="checkbox" />
            <span>get notified whene candidates apply for the job</span>
            <br></br>

            <input type="checkbox" />
            <span>
              get notified whene candidates accepts or reject an offer
            </span>
          </div>

          <div class="flex items-center mb-4">
            <input type="checkbox" id="agree" name="agree" class="mr-2" />
            <label for="agree" class="text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>
          <div class="mt-6">
            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Student;
