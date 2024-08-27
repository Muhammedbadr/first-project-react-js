"use client"; // Add this line at the top

import { useState } from 'react';

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({ ...player, score: player.score + 1 });;
    // player.score++;
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
  }

  return (
    <div className="space-y-4 w-1/2 p-4 bg-white rounded-md shadow-sm">
      <div className="flex items-center space-x-2">
        <label className="text-sm font-medium text-gray-700">
          Score: <b>{player.score}</b>
        </label>
        <button
          onClick={handlePlusClick}
          className="py-1 px-3 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          +1
        </button>
      </div>

      <div>
        <label htmlFor="firstName" className="text-start block text-sm font-medium text-gray-700">
          First name:
        </label>
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
          type="text"
          id="firstName"
          name="firstName"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your first name"
        />
      </div>

      <div>
        <label htmlFor="lastName" className="text-start block text-sm font-medium text-gray-700">
          Last name:
        </label>
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
          type="text"
          id="lastName"
          name="lastName"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your last name"
        />
      </div>
    </div>
  );
}
