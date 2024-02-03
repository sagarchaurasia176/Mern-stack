import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ApiUrl, filterData } from "./ApiUrl";
import ButtonData from "./Button";
import { toast } from "react-toastify";
import Card from "./Card";
import Spinner from "./Spinner";
function TopMainCoursePage() {
  const [apiDataset, setData] = useState(null);
  const [load, setLoad] = useState(true);

  //API cALLING
  const ApiData = async () => {
    //spinner code
    setLoad(true);
    try {
      const fetchData = await fetch(ApiUrl);
      const response = await fetchData.json();
      // console.log(response)
      setData(response.data);
    } catch {
      toast.error("Something wrong !");
    }

    setLoad(false);
  };

  //calling for the effect
  useEffect(() => {
    ApiData();
  }, []);

  return (
    <>
      <Navbar />
      <ButtonData filterData={filterData} />
      <div className="conatiner bg-white  m-auto  rounded-r-md w-5/6 h-auto">
        <div className="grid grid-cols-3 p-3 text-center gap-3 text-black">
          {/* how the spinner and card willl come while at the one time  */}
          {load ? <Spinner /> : <Card apiDataset = {apiDataset} />}
        </div>
      </div>
    </>
  );
}

export default TopMainCoursePage;
