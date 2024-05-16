import { useState, useEffect } from 'react';
import { PiArrowSquareRightDuotone } from "react-icons/pi";
import { PiArrowSquareLeftDuotone } from "react-icons/pi";
import { format, addDays, startOfDay, startOfWeek, isBefore } from 'date-fns';

const DatePicker = ({ onSelectDate, selectedDate }) => {
  const [currentWeekStart, setCurrentWeekStart] = useState(() => startOfWeek(new Date(), { weekStartsOn: 1 }));

  // Select the current date by default
  useEffect(() => {
    if (!selectedDate) {
      onSelectDate(startOfDay(new Date()));
    }
  }, [onSelectDate, selectedDate]);

  const isSelected = (date) => selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');
  const isDisabled = (date) => isBefore(date, startOfDay(new Date()));

  const generateWeekDays = () => {
    return Array.from({ length: 7 }, (_, i) => addDays(currentWeekStart, i)).map((day) => (
      <button
        key={day}
        disabled={isDisabled(day)}
        className={`lg:p-[12px] md:p-[10px] sm:p-[15px] p-[9px] lg:text-[13px] md:text-[9px] text-[10px] font-semibold mx-1 rounded-full ${isSelected(day) ? 'bg-[#3b83f688] text-white border-[2px] border-solid border-gray-600' : 'bg-[#36353565] text-white'} ${isDisabled(day) && 'bg-gray-600 text-black cursor-not-allowed'}`}
        onClick={() => onSelectDate(day)}
      >
        {format(day, 'MMM dd')}
      </button>
    ));
  };

  const goToNextWeek = () => {
    setCurrentWeekStart(addDays(currentWeekStart, 7));
  };

  const goToPreviousWeek = () => {
    const newStartOfWeek = addDays(currentWeekStart, -7);
    if (isBefore(newStartOfWeek, startOfWeek(new Date(), { weekStartsOn: 1 }))) {
      return;
    }
    setCurrentWeekStart(newStartOfWeek);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="flex items-center justify-between text-white w-full">
        <button
          onClick={() => setCurrentWeekStart(addDays(currentWeekStart, -7))}
          className="p-2 text-xl"
        >
          <PiArrowSquareLeftDuotone />
        </button>
        <div className="flex overflow-auto">
          {generateWeekDays()}
        </div>
        <button
          onClick={() => setCurrentWeekStart(addDays(currentWeekStart, 7))}
          className="p-2 text-xl"
        >
          <PiArrowSquareRightDuotone />
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
