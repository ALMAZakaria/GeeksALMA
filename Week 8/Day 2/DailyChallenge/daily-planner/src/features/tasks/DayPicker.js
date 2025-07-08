import React from 'react';

const DayPicker = ({ selectedDay, onChange }) => {
  return (
    <input
      type="date"
      value={selectedDay}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default DayPicker; 