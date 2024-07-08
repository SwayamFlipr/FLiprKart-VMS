import React from 'react';

interface IProps {
  placeholder: string;
  name: string;
  type: 'text' | 'password';
  label?: string;
}

const VInput: React.FC<IProps> = ({ placeholder, name, type, label }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>{label}</div>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full bg-white px-4 py-6 outline-none placeholder:text-gray-500"
      />
    </div>
  );
};

export default VInput;
