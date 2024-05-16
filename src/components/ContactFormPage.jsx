// pages/index.js
"use client"
import { useState } from 'react';
import DatePicker from '@/components/scheduler/DatePicker';
import TimeSlotSelector from '@/components/scheduler/TimeSlotSelector';
import TimeZoneSelector from '@/components/scheduler/TimeZoneSelector';
import FormComponent from '@/components/FormComponent';

const Contact = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const handleDaySelection = (date) => {
    setSelectedDate(date);
  };

  const handleTimeZoneSelection = (timeZone) => {
    setSelectedTimeZone(timeZone);
  };

  const handleTimeSlotSelection = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleSubmit = () => {
    console.log(`Date: ${selectedDate}`);
    console.log(`Time Zone: ${selectedTimeZone}`);
    console.log(`Time Slot: ${selectedTimeSlot}`);
  };

  return (
    <div className="p-8">
      <FormComponent/>
      <DatePicker onSelectDate={handleDaySelection} selectedDate={selectedDate} />
      <TimeZoneSelector onSelectTimeZone={handleTimeZoneSelection} selectedTimeZone={selectedTimeZone} />
      <TimeSlotSelector onSelectTimeSlot={handleTimeSlotSelection} selectedTimeSlot={selectedTimeSlot} />
      <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Contact;

