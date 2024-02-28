import React from 'react'
import Img from '../Img/Student.avif'


function Login() {

  return (
    <div>
      <div class="grid  grid-cols-2 mt-5">

        <div className=' '>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis deleniti magni.</p>

        </div>
          {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis perferendis deleniti magni.</p> */}
        <div>
          <img className=' w-4/5  animate-pulse' src={Img} alt="image" />

        </div>
      </div>


    </div>
  )
}

export default Login