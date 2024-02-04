import React, { useState } from "react";
import Card from "./Card";
// import toast from '../../node_modules/react-toastify'
import { toast } from "react-toastify";

function DataOfApi(props) {
  const testimonials = props.testimonials;
  const [index, setIndex] = useState(0);
  //HANDLER CONCEPTS
  const leftShit = () => {
    if (index - 1 < 0) {
      setIndex(testimonials.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const rightShift = () => {
    if (index + 1 >= testimonials.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const talkHandler = () => {
    toast.success("!Thanks to Interset with me");
  };

  return (
    <>
      <Card
        testimonials={testimonials[index]}
        leftShit={leftShit}
        rightShift={rightShift}
        talkHandler={talkHandler}
      />
    </>
  );
}

export default DataOfApi;
