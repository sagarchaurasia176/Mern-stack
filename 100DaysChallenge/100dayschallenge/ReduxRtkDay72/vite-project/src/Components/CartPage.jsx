import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";
import Carts from "./Carts";
function AddCart() {
  //  calling the redux selector here
  // it's return the complet of the arrays
  const { cart } = useSelector((state) => state);
  const [totalAmount , setTotal] = useState(0);

      //reduce fucntions
      useEffect(()=>{
        setTotal( )
        //change then it's executes
      },[cart])
  return (
    <div>
      {/* used the map here with the help of carts */}
      
      
      {
        //this is basically the conditions here
          cart.length > 0 ? (
          //if it's true
          // if this is true then this would be works
          // creating the main div of values
          
         <div>
            {/*  */}
            <div>
              {

                // firstly map the data 
                cart.map((item, index) => {
                  return <Carts key={item.id}
                    index={index}
                    item={item} />
                })
              }
            </div>
            {/*  */}
            <div>
              <h3>Your Cart</h3>
              <br></br>
              <div>
                <h2>Summary</h2>
              </div>
              <br></br>
              <div>
                <span>items -: {cart.length} </span>
              </div>
            </div>
            <div>
              <p>Total amount : {totalAmount}</p>
            </div>
          </div>

        )
          // if this is false then this would be works

          : (
            <div>
              <h1 className=" text-black text-center mt-32">Data Not Found</h1>
              <Link to="/home">
                <button
                  className=" bg-green-400  text-center 
                    mt-2 ml-[596px] m-auto p-2"
                >
                  Shop now
                </button>
              </Link>
            </div>
          )}
    </div>
  );
}
export default AddCart;
