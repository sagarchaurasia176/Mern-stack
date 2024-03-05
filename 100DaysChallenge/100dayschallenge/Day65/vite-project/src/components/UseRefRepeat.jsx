import React, { useRef, useState } from "react";
import "../App.css";
function UseRefRepeat() {
  //practice 1

  const [video, setVideo] = useState(false);

  const value = useRef(null);
  const move = () => {
    // value.current = value.current + 1;
    // alert("buttone clicked" + value.current)
    value.current.focus();
  };

  //video handler
  const videoHandler = () => {
    const nextIsPlaying = !video;
    setVideo(nextIsPlaying);

    //next i paying
    if (nextIsPlaying) {
      value.current.play();
    } else {
      value.current.pause();
    }
  };
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  //change handler
  const changeHandler = () => {
    if (!toggle) {
      alert("true");
    }
  };

 

  return (
    <div>
      <p className=" text-white">useRefRepeat</p>


      <br></br>
      <button onClick={changeHandler}>check</button>

      {/* change the btn name */}


      <input type="text" placeholder=" name" ref={value} />
      <button onClick={move}>Click me</button>

      <br></br>

      {/* video player */}
      <button onClick={videoHandler}>{video ? "pause" : "play"}</button>

      {/* video onPlay here */}
      <video
        ref={value}
        width={800}
        onPlay={() => setVideo(true)}
        onPause={() => setVideo(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

export default UseRefRepeat;
