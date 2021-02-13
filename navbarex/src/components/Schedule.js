import React from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Schedule = () => {
  return (
    <div className="schedule" id="schedule">
      <div className="welcome">
        <h1>Schedule</h1>
        <p>I am available monday through friday at 5</p>

      </div>
      
      <MyApp  />
    </div>
  );
}

export default Schedule;


function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
