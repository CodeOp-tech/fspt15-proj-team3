import React from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DateTimeDisplay from './DateTimeDisplay';
import { useContext } from 'react'; 
import { TimerContext } from "../Hooks/TimerContext";
import "./CountDownTimer.css";

const ShowCounter = ({minutes, seconds, increaseMin, decreaseMin}) => {

//Passed from App.js via useContext
let {targetMin} = useContext(TimerContext);


  return (
    <div className="counter">
      <a className="countdown">
        <DateTimeDisplay value={minutes} type={"Mins"} />
        <p> : </p>
        <DateTimeDisplay value={seconds} type={"Seconds"} />

        <div>
          <div>
            <IconButton  aria-label="delete" onClick={increaseMin}>
              <KeyboardArrowUpIcon color="primary" value={targetMin} />
            </IconButton>
          </div>

          <div>
            <IconButton  aria-label="delete" onClick={decreaseMin}>
              <KeyboardArrowDownIcon  color="primary"  value={targetMin} />
            </IconButton>
          </div>
        </div>
      </a>
      </div>
    );
  };

export default ShowCounter;
