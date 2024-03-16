import React from 'react'

// to receive the data form the cartPage 

function Carts({item, index}) {
  return (
    <div> 
        <div className=' grid grid-cols-2 gap-2 '>
         {/* card page  */}
          <div className=' bg-slate-300 h-auto w-auto  '>
                <div>
                  <img src={item.image} alt="" />
                </div>

                <div>
                  <b></b>
                  <p></p>
                  <span></span>
                </div>
          </div>
        
        </div>
        

    </div>
  )
}

export default Carts