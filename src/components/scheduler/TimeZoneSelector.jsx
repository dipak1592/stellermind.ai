"use client"
import React, { useState, useEffect, useRef } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const TimeZoneSelector = ({ onSelectTimeZone }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const wrapperRef = useRef(null);
  const timeZones = ['EST', 'MST', 'PST', 'CST','IST'];
  useEffect(() => {
    // Function to close dropdown if clicked outside
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const handleSelect = (value) => {
    setSelectedValue(value);
    onSelectTimeZone(value);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative mt-4">
      <label className="block text-white text-sm font-bold mb-2">Select Timezone</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-transparent text-white border border-gray-300 text-sm rounded-lg focus:border-blue-500  w-full p-2.5 focus:outline-none"
      >
        {selectedValue || "Select timezone"} <span><RiArrowDropDownLine /></span> 
      </button>
      {isOpen && (
        <div className="absolute z-10 left-0 right-0 mt-1 rounded-md border border-gray-300 text-sm  focus:border-blue-500 bg-black shadow-lg">
          <ul className="text-white text-sm rounded-md">
            {timeZones.map((tz, index) => (
              <li
                key={index}
                onClick={() => handleSelect(tz)}
                className="cursor-pointer rounded-md p-2 hover:bg-[#3b83f688] hover:text-white"
              >
                {tz}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TimeZoneSelector;

  





