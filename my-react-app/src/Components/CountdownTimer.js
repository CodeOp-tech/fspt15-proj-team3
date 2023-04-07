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
let {targetMin, setTargetMin, start, setStart, timer, setTimer, countDownTime} = useContext(TimerContext);

const [minutes, seconds, resetTimer] = useCountdown(targetMin, start, setStart, timer, setTimer, countDownTime);
//takes min, seconds values, set & resetTimer func from useCountdown hook
//NB - need to be included in return statement useEffect

const asyncIncrease = () => {
  setTimeout(() => {
    setTimer((timer) => timer + (1 * 60 * 1000));
  }, 1);
  console.log("* min")
};

const asynDescrease = () => {
  setTimeout(() => {
    setTimer((timer) => timer - (1 * 60 *1000));
  }, 1);
  console.log("- min")
};

/*
  const increaseMin = () => {
  //setTargetMin(Math.floor(targetMin) + 1)
  //adjustTimer(targetMin)
  setTimer(timer + (1 * 60 * 1000))
  console.log("+ min")
 }

  const decreaseMin = () => {
  //setTargetMin(Math.floor(targetMin) - 1)
  //adjustTimer(targetMin)
  setTimer(timer - (1 * 60 * 1000))
  console.log("- min")
 }
 */

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
        increaseMin={asyncIncrease}
        decreaseMin={asynDescrease}
      /> 
     </div>
    );
  }
};

export default CountdownTimer;
