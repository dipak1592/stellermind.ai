"use client"
import React, { useState, useEffect, useRef } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
const TimeSlotSelector = ({ onSelectTimeSlot, selectedTimeSlot }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(selectedTimeSlot);
  const wrapperRef = useRef(null);
  const timeSlots = [
    '06:00 AM - 07:00 AM', '07:00 AM - 08:00 AM', '08:00 AM - 09:00 AM', '09:00 AM - 10:00 AM','10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 01:00 PM', '01:00 PM - 02:00 PM', '02:00 PM - 03:00 PM', '03:00 PM - 04:00 PM',  '04:00 PM - 05:00 PM',  '05:00 PM - 06:00 PM', '06:00 PM - 07:00 PM', '07:00 PM - 08:00 PM', '08:00 PM - 09:00 PM','09:00 PM - 10:00 PM', '10:00 PM - 11:00 PM', '11:00 PM - 12:00 AM',   
  ];
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (value) => {
    setSelectedValue(value);
    onSelectTimeSlot(value);
    setIsOpen(false);
  };

  return (
    <div className="relative mt-4" ref={wrapperRef}>
      <label htmlFor="timeSlot" className="block text-white text-sm font-bold mb-2">Schedule Meeting</label>
      <button
        id="timeSlot"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-transparent border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 focus:outline-none"
      >
        {selectedValue || "Select timeslot"} <span><RiArrowDropDownLine /></span> 
      </button>
      
       {isOpen && (
        <div className="absolute z-10 left-0 right-0 mt-1 rounded-md border border-gray-300 text-sm  focus:border-blue-500 bg-black shadow-lg">
          <ul className="text-white text-sm rounded-md">
            {timeSlots.map((slot, index) => (
              <li
                key={index}
                onClick={() => handleSelect(slot)}
                className="cursor-pointer rounded-md p-[3px] hover:bg-[#3b83f688] hover:text-white"
              >
                {slot}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TimeSlotSelector;
