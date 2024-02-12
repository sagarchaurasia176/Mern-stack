import React, { useEffect, useState } from "react";

function Torch() {
  const [changeImg, setImg] = useState("https://randomuser.me/api/");


  useEffect(() => {
    async function RandomApiData() {
      const fetchAPi = await fetch(changeImg);
      const resp = await fetchAPi.json();
    setImg(resp)
    }
  },[]);

  
  return (
    <>
      <div className="  bg-white  p-2 m-2 w-4/5  text-black">
        <button className=" bg-slate-400 p-1" onClick={changeImg}>
          Click to change
        </button>
      </div>
    </>
  );
}

export default Torch;
