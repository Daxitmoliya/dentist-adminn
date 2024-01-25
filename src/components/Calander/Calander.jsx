import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
   <>
     <div className="calendar-container">
      <Calendar onChange={onChange} value={date}  />
    </div>

   </>
  );
};

export default MyCalendar;
