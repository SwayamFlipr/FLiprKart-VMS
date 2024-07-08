import React, { ChangeEventHandler, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';

interface IProps {
  placeholder: string;
  onSearch: (searchValue: string) => void;
}

const VSearch: React.FC<IProps> = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState('');
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout>();
  const handleChange: ChangeEventHandler = (e) => {
    const { value } = e.target as HTMLInputElement;
    setQuery(value);

    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    // Set a new timeout
    const timeout = setTimeout(() => {
      onSearch(value);
    }, 500);

    setDebounceTimeout(timeout);
  };
  return (
    <div className="flex items-center bg-white rounded-md border-2 border-green-400 py-2">
      <div className="pl-2">
        <IoMdSearch size={23} className="text-green-400" />
      </div>
      <input
        onChange={handleChange}
        type="text"
        className="appearance-none bg-white border-none w-full text-black placeholder:text-green-400 py-1 px-2 leading-tight focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default VSearch;
