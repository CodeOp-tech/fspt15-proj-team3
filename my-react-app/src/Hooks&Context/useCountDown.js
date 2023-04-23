import { useEffect, useState } from 'react';
//function which performs countdown calculation
//passes targetMin, start, setTimer, CountDownTime from CountDownTimer

const useCountdown = (targetMin, start, setStart, timer, setTimer, countDownTime) => {


//Restarts break
//Resets countDownTime (based on targetMin in App.js) and start = false
//Used in CountDownTimer comp when timer runs out
const resetTimer = () => {
    setStart(false)
    setTimer(countDownTime)
    console.log("timer reset", countDownTime)
  }

//setInterval browser API method to calculate the spare time every second(1000 milliseconds).
//returns time left i.e. timer in min & sec
  useEffect(() => {
    const interval = setInterval(() => {
      if (start)
      setTimer((timer) => timer - 1000);
      }, 1000);
      if (timer < 1000) resetTimer()
     return () => {
      clearInterval(interval)  
    }
  }, [countDownTime, start, targetMin]);

  return [...getReturnValues(timer), resetTimer, setTimer, timer];
};

const getReturnValues = (timer) => {
  //calculate time left in min & sec
  const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timer % (1000 * 60)) / 1000);
  return [minutes, seconds];
};

export { useCountdown };
