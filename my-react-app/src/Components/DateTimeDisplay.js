import React from 'react';

// re-usable component to show time remaining
const DateTimeDisplay = ({ value }) => {
  return (
    <div className='countdown'>
      <p>{value}</p>
    </div>
  );
};

export default DateTimeDisplay;
