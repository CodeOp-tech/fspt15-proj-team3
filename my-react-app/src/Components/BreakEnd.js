import React from 'react';
import { NavLink} from "react-router-dom";
import "./BreakEnd.css"
import illustration from "../Illustrations/zombieing.png"
import { useContext } from "react";
import { UserContext } from "../Hooks/UserContext";

const BreakEnd = () => {


  let { logOut } = useContext(UserContext);

  return (
    <div className='App'>
    <div className="popup-wrapper">

    <div className='left-container'>
      <img className="popup-img" src={illustration} />
    </div>


      <div className="right-container">

      <div className='text-container'>
      <h2 className='title'> Well done! Want more? </h2>
      </div>
      
      <div className='text-container'>
      <p className='p2'> Find balance in your life </p>
      </div>

       <div>
       <div className='button-box'>
        <NavLink
        to="/dashboard">
        <button 
        className='popup-button popup-button-outline'
        > EXLORE MORE !</button>
        </NavLink>
        </div>

        <div className='button-box'>
       
       <NavLink
         to=".." relative="path">
        <button
         className='popup-button popup-button-outline'
        > REPEAT BREAK </button>
        </NavLink>
      
        </div>

        <div className='button-box'>
        <NavLink
        to="/dashboard">
        <button
         className='popup-button popup-button-outline'
         onClick={logOut}
         > Let me work now </button>
         </NavLink>
        </div>
        </div>

     </div>

        </div>

      </div>
  );
};


export default BreakEnd;