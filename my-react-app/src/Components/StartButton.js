import React from 'react';

//re-usable component to start/stop timer
const StartButton = ({toggleStart}) => {
  return (
    <div>
    <button 
    className='timer-button timer-button-outline'
    onClick={toggleStart}> GO! 
    </button>
    </div>
  );
};

export default StartButton;

