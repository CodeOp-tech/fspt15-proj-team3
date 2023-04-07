import {React} from 'react';
import ShowCounter from './ShowCounter';
import "./CountDownTimer.css";
import { useCountdown } from '../Hooks/useCountDown';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react'; 
import { TimerContext } from "../Hooks/TimerContext";
//Parent component that renders ShowCounter or Navs to BreakEnd if timer < 0

const CountdownTimer = () => {
  
const navigate = useNavigate();
let {targetMin, setTargetMin, start, setStart} = useContext(TimerContext);

const [minutes, seconds, resetTimer, adjustTimer, setTimer, countDownTime, timer] = useCountdown(targetMin, start, setStart);
//takes min, seconds values adjustTimer func from useCountdown hook
//NB - need to be included in return statement useEffect

  const increaseMin = () => {
  console.log(targetMin)
  console.log(timer)
  //setTargetMin(Math.floor(targetMin) + 1)
  //adjustTimer(targetMin)
  setTimer(timer + (1* 60* 1000))
  console.log("+ min")
  console.log(targetMin)
  console.log(countDownTime)
  console.log(timer)
 }

  const decreaseMin = () => {
  console.log(targetMin)
  //setTargetMin(Math.floor(targetMin) - 1)
  //adjustTimer(targetMin)
  setTimer(timer - (1* 60* 1000))
  console.log("- min")
  console.log(targetMin)
  console.log(countDownTime)
  console.log(timer)
 }

 //when timer runs out triggers resetTimer() from useCountDown hook
 //& navigates to pop-up
 const endBreak = () => {
  resetTimer()
  navigate("welldone")
 }

 console.log("targetmin" , targetMin)
 console.log("min & sec" , minutes, seconds)
 console.log("countdowntime", countDownTime)
 console.log("timer", timer)


if (minutes + seconds <= 0) {
   return endBreak()
  } 
  else { 
    return (
      <div>
        <h4 className='set-timer'>SET TIMER</h4>
       <ShowCounter
        minutes={minutes}
        seconds={seconds}
        increaseMin={increaseMin}
        decreaseMin={decreaseMin}
      /> 
     </div>
    );
  }
};

export default CountdownTimer;
