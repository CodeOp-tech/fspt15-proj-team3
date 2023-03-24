import React from "react";
import CountdownTimer from "../Components/CountdownTimer";


function BreakPage() {

  const THREE_DAYS_IN_MS = 1 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <div className="App">

      <p> Break Page </p>

      <h1>Countdown Timer</h1>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      
    </div>
  )
}
export default BreakPage;
