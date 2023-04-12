import React from 'react';

//re-usable component to start/stop timer
const StartButton = ({toggleStart, start}) => {
  return (
    <div>
    {!start ? (
    <button 
    className='timer-button timer-button-outline'
    onClick={() => toggleStart()}> GO! 
    </button> ) : (<button 
    className='timer-button timer-button-outline'
    onClick={() => toggleStart()}> PAUSE</button> )}
    </div>
  );
};

export default StartButton;

