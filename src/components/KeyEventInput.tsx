import React, { useRef } from 'react';

interface IProps {
  enterHandler: (feild: string) => void;
}

const KeyEventInput: React.FC<IProps> = ({ enterHandler }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input
        className="placeholder:text-green-400 p-4 border-2 border-black"
        placeholder="Enter OrderID"
        // autoFocus={true}
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            if (!inputRef.current) return;
            enterHandler(inputRef.current.value);
          }
        }}
        type="text"
      />
    </div>
  );
};

export default KeyEventInput;
