import React from 'react';
import { NavLink} from "react-router-dom";


const BreakEnd = ({setTargetMinCB, targetMin, targetTime}) => {



const resetTimer = (e) => {
  setTargetMinCB(1)
  console.log(targetMin)
  console.log(targetTime)
}


  return (
    <div className="container card">

      <div className="row">
      <h4> Well done! Want more? </h4>
      </div>

      <div>
      <p> Find balance in your life </p>
      </div>

      <div className='row'>
      <div className="col-5">
        <p>Image</p>
      </div>
      </div>

      <div className='row'>
      <div className='col-7'>

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
    </div>
  );
};


export default BreakEnd;