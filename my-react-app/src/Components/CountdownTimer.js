import {React, useState, useEffect} from 'react';
import BreakEnd from './BreakEnd';
import ShowCounter from './ShowCounter';
import "./CountDownTimer.css";
//Parent component that conditionally renders ShowCounter or BreakEnd

const CountdownTimer = () => {

  const [start, setStart] = useState(false)
  const [targetMin, setTargetMin] = useState(0.1)
  const MIN_IN_MS = targetMin * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const targetTime = NOW_IN_MS + MIN_IN_MS;

  //hook that calculates time left
  const useCountdown = (targetTime, start, targetMin) => {
    
    //Target time
    const countDownTime = new Date(targetTime).getTime();
    console.log(countDownTime)

    //Timer > targetTime - currentTime
    const [timer, setTimer] = useState(
      countDownTime - new Date().getTime()
      );
      console.log(timer)
    
    //setInterval browser API method to calculate the spare time every second(1000 milliseconds).
      useEffect(() => {
        const interval = setInterval(() => {
          if (start)
          setTimer(countDownTime - new Date().getTime());
          }, 1000);
          //setStart(false)
         return () => {
          clearInterval(interval)  
        }
      }, [start, targetMin]);
    
      return getReturnValues(timer);
    };
    
      const getReturnValues = (timer) => {
      //calculate  min & seconds left
      const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timer % (1000 * 60)) / 1000);
      if (timer === 0) setStart(false)
      console.log(start)
      return [minutes, seconds];
    };


  const [minutes, seconds] = useCountdown(targetTime, start, targetMin);
  //takes min and second of targetDate

  const toggleStart = () => {
    setStart(!start)
    console.log(start)
}

  const increaseMin = () => {
  console.log(targetMin)
  setTargetMin(targetMin + 1) 
  console.log(targetMin)
 }

  const decreaseMin = () => {
  console.log(targetMin)
  setTargetMin(targetMin - 1) 
  console.log(targetMin)
 }

 const resetTimer = (e) => {
  setTargetMin(0.2)
  setStart(true)
  console.log("reset")
  console.log(targetMin)
}


if (minutes + seconds <= 0) {
   return <BreakEnd
           resetTimer={resetTimer}
            />;
  } 

  else { 
    return (
      <div>
       <ShowCounter
        minutes={minutes}
        seconds={seconds}
        targetMin={targetMin}
        setTargetMin={setTargetMin}
        start={start}
        toggleStart={toggleStart}
        setStart={setStart}
        increaseMin={increaseMin}
        decreaseMin={decreaseMin}
      /> 
     </div>
    );
  }
};

export default CountdownTimer;
