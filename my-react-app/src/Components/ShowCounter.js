import React from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DateTimeDisplay from "./DateTimeDisplay";
import "./CountDownTimer.css";

const ShowCounter = ({
  minutes,
  seconds,
  targetMin,
  increaseMin,
  decreaseMin,
  toggleStart,
}) => {
  return (
    <div className="counter">
      <a className="countdown">
        <DateTimeDisplay value={minutes} type={"Mins"} />
        <p> : </p>
        <DateTimeDisplay value={seconds} type={"Seconds"} />

        <div>
          <div>
            <IconButton aria-label="delete" onClick={increaseMin}>
              <KeyboardArrowUpIcon value={targetMin} />
            </IconButton>
          </div>

          <div>
            <IconButton aria-label="delete" onClick={decreaseMin}>
              <KeyboardArrowDownIcon value={targetMin} />
            </IconButton>
          </div>
        </div>
      </a>

      <button
        className="timer-button timer-button-outline"
        onClick={toggleStart}
      >
        {" "}
        GO!
      </button>
    </div>
  );
};

export default ShowCounter;
