import { useEffect, useState } from 'react';

//function which performs countdown calculation
//passes targetTime from breakPage
const useCountdown = (targetMin) => {

//Target time
const countDownTime = targetMin * 60 * 1000
  console.log(countDownTime)

const [start, setStart] = useState(true)



//Time emaining > targetTime - currentTime
  const [timer, setTimer] = useState(countDownTime);
  console.log(timer)

  const resetTimer = (e) => {
    //setTargetMin(0.2)
    setTimer(countDownTime)
    toggleStart()
    console.log(targetMin)
  }

  const toggleStart = () => {
    setStart(!start)
    console.log(start)
    console.log("toggle works")
}

//setInterval browser API method to calculate the spare time every second(1000 milliseconds).
  useEffect(() => {
    const interval = setInterval(() => {
      if (start)
      setTimer((timer) => timer - 1000);
      }, 1000);
      //setStart(false)
      if (timer < 1000) setStart(false)
     return () => {
      clearInterval(interval)  
    }
  }, [countDownTime, start, targetMin, timer]);

  return [...getReturnValues(timer), toggleStart, resetTimer];
};

const getReturnValues = (timer) => {
  // calculate time left
  const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timer % (1000 * 60)) / 1000);
  return [minutes, seconds];
};

export { useCountdown };
