import React, { useEffect, useState } from "react";
import Random from "./Random";
import api from "./GitHub";

function RandomUser() {
  const [Data, setData] = useState(api);

  //fetch data here and then we moved to the next
  const apiData = async () => {
    const Datas = await fetch(Data);
    setData(await Datas.json());
  };

  //calling to the api data
  useEffect(() => {
    //its call the functions once we have created
    apiData()
  }, []);

  return (
    <>
      {/* props data */}
      <Random />
    </>
  );
}
export default RandomUser;
