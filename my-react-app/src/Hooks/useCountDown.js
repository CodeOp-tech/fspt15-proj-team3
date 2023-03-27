import { useEffect, useState } from 'react';

//function which performs countdown calculation
//passes targetdate from breakPage
const useCountdown = (targetTimeCB, start) => {

//Target time
  const countDownTime = new Date(targetTimeCB).getTime();
  console.log(countDownTime)

//Time remaining
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
  
    return () => clearInterval(interval);
  }, [countDownTime]);

  return getReturnValues(timer);
};

const getReturnValues = (timer) => {
  // calculate time left
  const minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timer % (1000 * 60)) / 1000);
  return [minutes, seconds];
};

export { useCountdown };
