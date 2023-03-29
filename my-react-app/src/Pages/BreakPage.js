import {React, useState} from "react";
import CountdownTimer from "../Components/CountdownTimer";


function BreakPage() {
  const [targetMin, setTargetMin] = useState(5)
  //const [start, setStart] = useState(true)

  const MIN_IN_MS = targetMin * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const targetTime = NOW_IN_MS + MIN_IN_MS;

  /*const toggleStart = () => {
        setStart(!start)
        console.log(start)
  }
  */

  return (
    <div className="App">

      <p> Break Page </p>

      <CountdownTimer 
      targetTime={targetTime}
      targetMin={targetMin}
      setTargetMinCB={setTargetMin} />

{/*
      <div>
        <label> remove </label>
        <input
        type="number"
        value={targetMin}
        onChange={handleChangeMin}>
        </input>
      </div>

      <button onClick={toggleStart}> Start/Pause </button>
  */}  
    </div>
  )
}
export default BreakPage;
