import React, { useState } from 'react';

const OnlineOfflineBtn = ({onStatusChange}) => {
  const [isOnline, setIsOnline] = useState(false);

  const toggleStatus = () => {
    const newStatus = !isOnline;
    setIsOnline(newStatus);
    onStatusChange(newStatus);
  };

  const borderColor = isOnline ? 'border-green-500' : 'border-red-500';

  return (
    <div className={`bg-white m-2 text-white p-4 border-2 rounded-md flex items-center justify-center`}>
      <div className={`inline-block w-80 h-16 border rounded-full ${borderColor} p-1`}>
        <div className="flex items-center justify-center h-full">
          <button
            className={`w-1/2 h-full flex items-center justify-center rounded-full ${isOnline ? 'bg-white' : 'bg-red-500'
              } text-base font-semibold focus:outline-none ${isOnline ? 'pointer-events-none' : ''
              }`}
            onClick={toggleStatus}
          >
            Offline
          </button>
          <button
            className={`w-1/2 h-full flex items-center justify-center rounded-full ${isOnline ? 'bg-green-500' : 'bg-white'
              } text-base font-semibold focus:outline-none ${!isOnline ? 'pointer-events-none' : ''
              }`}
            onClick={toggleStatus}
          >
            Online
          </button>
        </div>
      </div>
    </div>
  );
}

export default OnlineOfflineBtn;