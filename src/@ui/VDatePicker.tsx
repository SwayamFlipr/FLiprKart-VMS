import React, { useRef } from 'react';
import toast from 'react-hot-toast';

export const VDatePicker: React.FC = () => {
  const startTimeRef = useRef<HTMLInputElement>(null);
  const stopTimeRef = useRef<HTMLInputElement>(null);

  const onDateChange = () => {
    if (!startTimeRef.current?.value || !stopTimeRef.current?.value) {
      return toast.error('Start and Stop Time Are Required');
    }
    const startTime = new Date(startTimeRef.current?.value ?? '');
    const stopTime = new Date(stopTimeRef.current?.value ?? '');

    window.Main.getTimeFilteredRecords({ startTime, stopTime });
  };

  const refreshRecords = () => {
    if (startTimeRef.current && stopTimeRef.current) {
      startTimeRef.current.value = '';
      stopTimeRef.current.value = '';
    }
    window.Main.getAllRecords();
  };

  return (
    <div className="flex gap-12 items-center">
      <div
        className="text-white py-2 px-4 font-thin flex text-xl bg-green-500 rounded-2xl cursor-pointer"
        onClick={refreshRecords}
      >
        RESET
      </div>
      <div className="flex justify-evenly gap-4">
        <div className="text-black flex flex-col gap-2 justify-center font-black">
          <span>Enter Start Date</span>
          <input
            onChange={onDateChange}
            ref={startTimeRef}
            type="datetime-local"
            name={'start-time'}
            className="text-black placeholder:text-black"
          />
        </div>
        <div className="text-black flex flex-col gap-2 justify-center font-black">
          <span>Enter End Date</span>
          <input
            onChange={onDateChange}
            ref={stopTimeRef}
            type="datetime-local"
            name={'stop-time'}
            className="text-black placeholder:text-black"
          />
        </div>
      </div>
    </div>
  );
};
export default VDatePicker;
