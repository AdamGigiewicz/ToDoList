import React from 'react';

const Calendar = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <div>
      <h3>Calendar</h3>
      <p>Current Date: {formattedDate}</p>
    </div>
  );
};

export default Calendar;