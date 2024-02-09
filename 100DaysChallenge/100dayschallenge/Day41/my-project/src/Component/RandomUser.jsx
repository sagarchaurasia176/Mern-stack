import React, { useEffect, useState } from "react";
// import Random from "./Random";
import api from "./GitHub";
import DataCheck from "./DataCheck";

function RandomUser() {
  const [data, setData] = useState([]);
  //useEffect data
  useEffect(() => {
    const datas = async () => {
      const apiUrl = await fetch(api);
      const resp = await apiUrl.json();
      setData(resp.data);
      console.log(resp);
    };
    datas();
  });
  //return this data values
  return (
    <>
      <DataCheck data={data} />
    </>
  );
}
export default RandomUser;
