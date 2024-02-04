import React from 'react'
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { MdOutlineArrowCircleLeft } from "react-icons/md";

function Card(props) {
    const testimonials = props.testimonials;
    const { leftShit, rightShift, talkHandler } = props;
    return (

        <div className=' container bg-blue-300  m-auto  w-1/2 p-1 rounded-md text-black'>
            <div className=' bg-purple-500 rounded-full relative top-[-33px] left[4px] w-14'>
                <img className=' w-12 rounded-full  '
                    src={testimonials.Image} />
            </div>
            <div className=' text-center '>
                <h1 className='text-lg'><b>{testimonials.name}</b></h1>
                <p>{testimonials.position}</p>
            </div>
            <div className=' text-center p-3  text-black'>
                <p>{testimonials.comment}
                </p>
            </div>
            <div className=" flex justify-evenly ">

                <button
                    onClick={leftShit}
                    className=" text-2xl">
                    <MdOutlineArrowCircleLeft />
                </button>

                <button
                    onClick={rightShift}
                    className=" text-2xl">
                    <MdOutlineArrowCircleRight />
                </button>
            </div>

            <button
                onClick={talkHandler}

                //    onClick={talkHandler}
                className=" bg-purple-400 text-white font-semibold p-2 rounded-lg text-center m-auto flex">
                Talk with me
            </button>


        </div>
    )
}

export default Card