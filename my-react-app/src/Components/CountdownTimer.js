import {React, useState} from 'react';
import BreakEnd from './BreakEnd';
import ShowCounter from './ShowCounter';
import "./CountDownTimer.css";
import { useCountdown } from '../Hooks/useCountDown';
import { useNavigate } from 'react-router-dom';
//Parent component that renders ShowCounter or Navs to BreakEnd if timer < 0

const CountdownTimer = () => {
  
  const navigate = useNavigate();
  const [targetMin, setTargetMin] = useState(0.1)
  const [minutes, seconds, toggleStart, resetTimer, adjustTimer] = useCountdown(targetMin);
  //takes min, seconds values & toggleStart, resetTimer func from useCountdown hook
  //NB - need to be included in return statement useEffect


  const increaseMin = () => {
  console.log(targetMin)
  setTargetMin(targetMin + 1)
  adjustTimer()
  console.log(targetMin)
 }

  const decreaseMin = () => {
  console.log(targetMin)
  setTargetMin(targetMin - 1)
  adjustTimer()
  console.log(targetMin)
 }

 console.log(minutes, seconds)


if (minutes + seconds <= 0) {
   return navigate("welldone")
   {/*<BreakEnd
           resetTimer={resetTimer}
/>*/}
  } 
  else { 
    return (
      <div>
       <ShowCounter
        minutes={minutes}
        seconds={seconds}
        targetMin={targetMin}
        setTargetMin={setTargetMin}
        toggleStart={toggleStart}
        increaseMin={increaseMin}
        decreaseMin={decreaseMin}
      /> 
     </div>
    );
  }
};

export default CountdownTimer;
