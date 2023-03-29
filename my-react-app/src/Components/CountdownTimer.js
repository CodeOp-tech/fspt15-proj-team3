import {React, useState} from 'react';
import { useCountdown } from '../Hooks/useCountDown'
import BreakEnd from './BreakEnd';
import DateTimeDisplay from './DateTimeDisplay';
import "./CountDownTimer.css";
//Parent component that conditionally renders ShowCounter or BreakEnd

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
      className="countdown-link"
      >
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
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

      <div>
        <input
        type="number"
        value={targetMin}
        onChange={handleChangeMin}>
        </input>
      </div>

      <button onClick={toggleStart}> Start </button>
      
     </div>
    );
  }
};

export default CountdownTimer;
