import { useState, useRef, useEffect } from "react";

interface CustomTimePickerProps {
    selectedTime: string;
    setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
    availableTimes: string[];
}

const CustomTimePicker: React.FC<CustomTimePickerProps> = ({ selectedTime, setSelectedTime, availableTimes }) => {
  const [showPopup, setShowPopup] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // ✅ Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowPopup(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setShowPopup(false);
  };

  return (
    <div className="relative w-full max-w-sm" ref={containerRef}>
      <input
        type="text"
        name="time"
        readOnly
        value={selectedTime}
        placeholder="Select a time"
        onClick={() => setShowPopup(prev => !prev)}
        className="mt-2 p-2 w-xs border rounded cursor-pointer bg-white"
      />

      {showPopup && (
        <div className="absolute z-50 bg-white border rounded shadow-md w-xs mt-1">
          <div className="grid grid-cols-3 gap-2 p-2">
            {availableTimes.map(time => (
              <button
                key={time}
                type="button"
                onClick={() => handleTimeSelect(time)}
                className={`p-2 rounded border text-center transition w-full 
                  ${selectedTime === time ? "bg-blue-500 text-white" : "bg-white border-gray-300 hover:bg-gray-100"}`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default CustomTimePicker;