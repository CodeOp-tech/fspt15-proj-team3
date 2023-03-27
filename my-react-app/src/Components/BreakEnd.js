import React from 'react';
import { NavLink} from "react-router-dom";


const BreakEnd = ({setTargetMinCB, targetMin}) => {

const resetTimer = (e) => {
  setTargetMinCB(1)
  console.log(targetMin)
}


  return (
    <div className="container card">

      <div>
      <h4> Well done! Want more? </h4>
      </div>

      <div>
      <p> Find balance in your life </p>
      </div>

      <div>

        <div>
        <NavLink
        to="/dashboard">
        <button
        > Explore more !</button>
        </NavLink>
        </div>

        <div>
        <NavLink
        to="/break">
        <button
        onClick={resetTimer}
        > Repeat break </button>
        </NavLink>
        </div>

        <div>
        <button> Let me work now </button>
        </div>


      </div>
    </div>
  );
};


export default BreakEnd;