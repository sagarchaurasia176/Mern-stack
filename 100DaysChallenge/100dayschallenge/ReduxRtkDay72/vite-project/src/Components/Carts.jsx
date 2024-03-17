import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
// to receive the data form the cartPage 

function Carts({ item, index }) {
  const dispatch = useDispatch();
  // remove btn in the cart page
  const removeBtn = () => {
    //from the redux 
    dispatch(remove(item.id));
      toast.success("item removed");
  }

  return (

    <div>

      <div>
        {/* card page  */}
        <div className='
        border border-gray-400 rounded-lg p-4
        h-auto w-auto  '>
          <div>
            <img 
            className=' w-32 m-auto'
            src={item.image} alt="" />
          </div>
          <div>
            <p>{item.description}</p>
          </div>
          <div>
            <b>{item.price}</b>
          </div>
          <div>
            {/* remove btn */}
            <MdDelete
              onClick={removeBtn}
              className=' bg-red-400 shadow-md' />
          </div>
        </div>

      </div>


    </div>
  )
}

export default Carts