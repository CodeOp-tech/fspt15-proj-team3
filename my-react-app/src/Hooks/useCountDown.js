import { useEffect, useState } from 'react';
//function which performs countdown calculation
//passes user targetMin from CountDownTimer

const useCountdown = (targetMin) => {
//targetMin to milliseconds
const countDownTime = targetMin * 60 * 1000
  console.log(countDownTime)
//to start or pause timer
const [start, setStart] = useState(false)

//timer stateVar 
const [timer, setTimer] = useState(countDownTime);
  console.log(timer)


//Restarts break in breakEnd component. 
//Resets countDownTime = 0.1 and start = true
const resetTimer = (e) => {
    setTimer(countDownTime)
    toggleStart()
    console.log("reset clicked")
  }

//Restarts break in breakEnd component. 
//Resets countDownTime = 0.1 and start = true
const adjustTimer = (e) => {
  setTimer(countDownTime)
  console.log(targetMin)
  console.log("+/- timer")
}

//To start/stop Timer. Used in showCounter and resetTimer() func
  const toggleStart = () => {
    setStart(!start)
    console.log(start)
    console.log("toggle clicked")
}

//setInterval browser API method to calculate the spare time every second(1000 milliseconds).
  useEffect(() => {
    const interval = setInterval(() => {
      if (start)
      setTimer((timer) => timer - 1000);
      }, 1000);
      if (timer < 1000) setStart(false)
     return () => {
      clearInterval(interval)  
    }
  }, [countDownTime, start, targetMin, timer]);

  return [...getReturnValues(timer), toggleStart, resetTimer, adjustTimer, start];
};

const getReturnValues = (timer) => {
  // calculate time left
  const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timer % (1000 * 60)) / 1000);
  return [minutes, seconds];
};

export { useCountdown };
