import React, { useEffect } from "react";
import { apiUrl } from "./Data";
import { toast } from "react-toastify";
import { useState } from "react";
import Dataget from "./Dataget";

function Cart() {
  // funcion practice here
  const [dataPass, setDataPass] = useState([]);
  const DataFetch = async () => {
    try {
      const data = await fetch(dataPass);
      const resp = await data.json();
      setDataPass(resp);
    } catch {
      toast.error("error in api");
    }
  };

  useEffect(() => {
    DataFetch();
  }, []);

  return (
    <>
      <Dataget dataPass={dataPass} />
    </>
  );
}

export default Cart;
