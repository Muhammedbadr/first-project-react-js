"use client"; // Add this line at the top

import { useState } from 'react';

export default function Array_stara() {
    let nextId = 4;
    const [devicesNameInputValue, setDevicesNameInputValue] = useState('');
    const [devices, setDevices] = useState([
        { id: 1, name: "blue" },
        { id: 2, name: "yellow" },
        { id: 3, name: "red" },
    ]);

    const devicesList = devices.map((device) => (
        <li
            key={device.id}
            className="flex justify-between items-center py-2 text-lg pl-2 font-semibold text-gray-800 tracking-wide transition-transform transform hover:text-indigo-600"
        >
            {device.name}
            <div className="space-x-2">
                <button
                    onClick={() => handleEditDevice(device.id)}
                    className="text-sm px-2 py-1 bg-yellow-500 text-white rounded-md shadow-sm hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDeleteDevice(device.id)}
                    className="text-sm px-2 py-1 bg-red-500 text-white rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                    Delete
                </button>
            </div>
        </li>
    ));

    function handleAddDevice() {
        if (devicesNameInputValue.trim()) {
            setDevices([...devices, { id: nextId, name: devicesNameInputValue.trim() }]);
            setDevicesNameInputValue(''); // Clear the input field after adding
            nextId += 1;
        }
    }

    function handleDeleteDevice(id) {
        const newDevices = devices.filter(device => device.id !== id);
        setDevices(newDevices);
    }

    function handleEditDevice(id) {
        const newDevices = devices.map((device) => {
            if (device.id === id) {
                return { ...device, name: device.name + "0" };
            } else {
                return device;
            }
        });
        setDevices(newDevices);
    }

    return (
        <div className="space-y-4 w-1/2 mx-auto ">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <ul className="divide-y divide-gray-200 text-left">
                    {devicesList}
                </ul>
            </div>

            <div className="flex space-x-2">
                <input
                    value={devicesNameInputValue}
                    onChange={(e) => setDevicesNameInputValue(e.target.value)}
                    type="text"
                    className="flex-1 px-3 py-3 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Add a color"
                />
                <button
                    onClick={handleAddDevice}
                    className="px-4 py-3 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add
                </button>
            </div>
        </div>
    );
}
