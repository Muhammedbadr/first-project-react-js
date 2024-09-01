"use client"; // Add this line at the top

import { useState } from 'react';

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(prevPending => prevPending + 1);
    await delay(3000);
    
    setPending(prevPending => prevPending - 1);
    setCompleted(prevCompleted => prevCompleted + 1);
  }

  return (
    <div className="flex w-1/3 flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-700">
        Pending: <span className="text-blue-500">{pending}</span>
      </h3>
      <h3 className="text-xl font-bold text-gray-700">
        Completed: <span className="text-green-500">{completed}</span>
      </h3>
      <button
        onClick={handleClick}
        className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150"
      >
        Buy
      </button>
    </div>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
