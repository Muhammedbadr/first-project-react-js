"use client"; // Add this line at the top

import { useState } from "react";

export default function FormInp() {
    const [formInputs, setFormInput] = useState({ name: "", email: "", age: "", genernl: "" });

    return (
        <form
            className="space-y-4 w-1/2"
            onSubmit={(event) => {
                event.preventDefault();
                console.log(formInputs);
            }}
        >
            <div>
                <label htmlFor="name" className="text-start block text-sm font-medium text-gray-700">
                    Name:
                </label>
                <input
                    value={formInputs.name}
                    onChange={(event) => {
                        setFormInput({ ...formInputs, name: event.target.value });
                    }}
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your name"
                />
            </div>

            <div>
                <label htmlFor="email" className="text-start block text-sm font-medium text-gray-700">
                    Email:
                </label>
                <input
                    value={formInputs.email}
                    onChange={(event) => {
                        setFormInput({ ...formInputs, email: event.target.value });
                    }}
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your email"
                />
            </div>

            <div>
                <label htmlFor="age" className="text-start block text-sm font-medium text-gray-700">
                    Age:
                </label>
                <input
                    value={formInputs.age}
                    onChange={(event) => {
                        setFormInput({ ...formInputs, age: event.target.value });
                    }}
                    type="number"
                    id="age"
                    name="age"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your age"
                />
            </div>

            <div>
                <label htmlFor="store" className="text-start block text-sm font-medium text-gray-700">
                    Your Store:
                </label>
                <textarea
                    value={formInputs.genernl}
                    onChange={(event) => {
                        setFormInput({ ...formInputs, genernl: event.target.value });
                    }}
                    id="store"
                    name="store"
                    rows="10"
                    cols="30"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Describe your store"
                ></textarea>
            </div>

            <button
                type="submit"
                className="text-right inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Submit
            </button>
        </form>
    );
}
