import {React, useState} from 'react';
import { useCountdown } from '../Hooks/useCountDown'
import BreakEnd from './BreakEnd';
import DateTimeDisplay from './DateTimeDisplay';
import "./CountDownTimer.css";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
//Parent component that conditionally renders ShowCounter or BreakEnd

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="counter">
      <a
      className="countdown">
        <DateTimeDisplay value={minutes} type={'Mins'}  />
        <p> : </p>
        <DateTimeDisplay value={seconds} type={'Seconds'} />
      </a>
    </div>
  );
};

const CountdownTimer = ({targetTime, targetMin, setTargetMinCB}) => {
  const [start, setStart] = useState(false)
  
  const toggleStart = () => {
    setStart(!start)
    console.log(start)
}

const handleChangeMin = (e) => {
  setTargetMinCB(e.target.value);
    }

const increaseMin = () => {
  console.log(targetMin)
  setTargetMinCB(targetMin + 1) 
  console.log(targetMin)
}

const decreaseMin = () => {
  console.log(targetMin)
  setTargetMinCB(targetMin - 1) 
  console.log(targetMin)
}

  const [minutes, seconds] = useCountdown(targetTime, start, targetMin, setStart);
  //takes min and second of targetDate defined in BreakPage

  if (minutes + seconds <= 0) {
    return <BreakEnd
           setTargetMinCB={setTargetMinCB}
           targetMin={targetMin}
           targetTime={targetTime}
            />;
  } else {
    return (
      <div>
       <ShowCounter
        minutes={minutes}
        seconds={seconds}
      />

      
     <IconButton aria-label="delete">
      <DeleteIcon
      value={targetMin}
      onClick={increaseMin}/>
      </IconButton>

      <IconButton aria-label="delete">
      <AlarmIcon
      value={targetMin}
      onClick={decreaseMin}/>
      </IconButton>

        <input
        type="number"
        //value={targetMin}
        className='timer-increment'
        onChange={handleChangeMin}>
        </input>
    

      <div className='timer-button-box'>
      <button 
      className='timer-button timer-button-outline'
      onClick={toggleStart}> GO! 
      </button>
      </div>



      
      
     </div>
    );
  }
};

export default CountdownTimer;
