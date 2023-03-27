import {React, useState} from 'react';
import { useCountdown } from '../Hooks/useCountDown'
import BreakEnd from './BreakEnd';
import DateTimeDisplay from './DateTimeDisplay';

//Parent component that conditionally renders ShowCounter or ExpiredNotice

const ShowCounter = ({ minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a
        href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
      
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
      </a>
    </div>
  );
};

const CountdownTimer = ({targetTimeCB, handleChangeMinCB, targetMin, setTargetMinCB}) => {
  const [start, setStart] = useState(true)
  
  const toggleStart = () => {
    setStart(!start)
    console.log(start)
}
  const [minutes, seconds] = useCountdown(targetTimeCB, start);
  //takes min and second of targetDate defined in BreakPage

  if (minutes + seconds <= 0) {
    return <BreakEnd
          setTargetMinCB={setTargetMinCB} />;
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
        onChange={handleChangeMinCB}>
        </input>
      </div>

      <button onClick={toggleStart}> Start/Pause </button>
      
     </div>
    );
  }
};

export default CountdownTimer;
