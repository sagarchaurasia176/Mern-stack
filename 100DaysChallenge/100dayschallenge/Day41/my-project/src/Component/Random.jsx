import React from "react";
function Random() {
  return (
    <div>
      <h1 className=" text-center font-semibold">Github - Users</h1>
      <br />
      <div className="main-container gap-6  h-auto  grid grid-cols-2">
        
          <div className="grid grid-cols-2  rounded-xl gap-2 p-2 bg-black text-white">
            <div className="image  "></div>
            <div className="text  w-60">
              <p></p>
            </div>
            <br />

            <div className="box bg-slate-400  flex  m-auto  ">
              <p className=" p-1">follow</p>
              <p className=" p-1">following</p>
              <p className=" p-1">Projects</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Random;
