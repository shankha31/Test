import React, { useState } from 'react';

function Header() {
  const [isOnline, setIsOnline] = useState(false);

  const handleToggle = () => {
    setIsOnline((prevIsOnline) => !prevIsOnline);
  };

  const borderColor = isOnline ? 'border-green-500' : 'border-red-500';

  return (
    <div className={`bg-gray-800 text-white p-4 border-2 rounded-md`}>
      <div className={`inline-block w-80 h-16 border rounded-full ${borderColor} p-1`}>
        <div className="flex items-center justify-center h-full">
          <button
            className={`w-1/2 h-full flex items-center justify-center rounded-full ${
              isOnline ? 'bg-gray-500' : 'bg-red-500'
            } text-base font-semibold focus:outline-none ${
              isOnline ? 'opacity-0 pointer-events-none' : ''
            }`}
            onClick={handleToggle}
          >
            Offline
          </button>
          <button
            className={`w-1/2 h-full flex items-center justify-center rounded-full ${
              isOnline ? 'bg-green-500' : 'bg-gray-500'
            } text-base font-semibold focus:outline-none ${
              !isOnline ? 'opacity-0 pointer-events-none' : ''
            }`}
            onClick={handleToggle}
          >
            Online
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;