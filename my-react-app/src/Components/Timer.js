import {React, useState} from "react";
import { CountdownCircleTimer, useCountdown} from "react-countdown-circle-timer";


function Timer() {

const {
        path,
        pathLength,
        stroke,
        strokeDashoffset,
        remainingTime,
        elapsedTime,
        size,
        strokeWidth,
      } = useCountdown({ isPlaying: true, duration: 7 })
      

  return (
    <div className="App">

      <p> Timer </p>
      <CountdownCircleTimer
        isPlaying
        duration={7}
     >
     
      </CountdownCircleTimer>
      
    </div>
  )
}
export default Timer
