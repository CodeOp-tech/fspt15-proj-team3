import React from 'react';
import { useCountdown } from '../Hooks/useCountDown'
import DateTimeDisplay from './DateTimeDisplay';

//Parent component that conditionally renders ShowCounter or ExpiredNotice

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span> Your Break has finished </span>
      <p> Reset to continue break </p>
    </div>
  );
};

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

const CountdownTimer = ({targetTimeCB, start}) => {
  const [minutes, seconds] = useCountdown(targetTimeCB, start);
  //takes min and second of targetDate defined in BreakPage

  if (minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    
    return (
        <ShowCounter
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
