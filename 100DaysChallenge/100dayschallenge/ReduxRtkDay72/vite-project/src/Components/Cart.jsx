import React, { useEffect } from "react";
import { apiUrl } from "./Data";
import { toast } from "react-toastify";

function Cart() {
  // funcion practice here
  useEffect(() => {
    const DataFetch = async () => {
      try {
        const data = await fetch(apiUrl);
        const resp = await data.json();

      } catch {
        toast.error("error in api");
      }
    };
    DataFetch();
  }, []);

  return(
    <>
    


    </>
  );

}

export default Cart;
