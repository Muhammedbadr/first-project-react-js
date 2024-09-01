"use client"; // Add this line at the top

import { useState } from 'react';
import Alert_error from './alert_error';

export default function RequestingALoan() {
  const [showModel, setshowModel] = useState(false)

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    isEmployee: false,
    amounts: {
      '1000.00$': false,
      '200.00$': false,
      '300.00$': false,
    },
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleCheckboxChange(e) {
    const { name, checked } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  }

  function handleAmountChange(e) {
    const { value, checked } = e.target;
    setFormValues(prevState => ({
      ...prevState,
      amounts: {
        ...prevState.amounts,
        [value]: checked,
      },
    }));
  }

  function calculateLoan(e) {
    e.preventDefault();
    // Your calculation logic here
    setshowModel(true)
  }

  function hansledivclick(){
    if(showModel){
      setshowModel(false); // Toggle the model visibility

    }
  }

  const isFormValid = formValues.name && formValues.email && formValues.phone;
  const isVisible = (showModel); // Set this dynamically as needed

  return (
    <div onClick={hansledivclick} className='relative w-full flex justify-center items-center'>
      <div className='py-8 px-6 w-full flex justify-center'>
        <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Requesting <span className="text-blue-600 underline">a Loan</span>
          </h1>
          
          <hr className="mb-6 border-gray-300" />
      
          <form onSubmit={calculateLoan} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="isEmployee"
                name="isEmployee"
                checked={formValues.isEmployee}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label htmlFor="isEmployee" className="text-sm font-medium text-gray-700">
                Are you an employee?
              </label>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Select amounts:</p>
              <ul className="space-y-2 mt-2">
                {Object.keys(formValues.amounts).map(amount => (
                  <li key={amount} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={amount}
                      name="amount"
                      value={amount}
                      checked={formValues.amounts[amount]}
                      onChange={handleAmountChange}
                      className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    />
                    <label htmlFor={amount} className="text-sm font-medium text-gray-700">
                      {amount}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="submit"
              className={`w-full py-3 px-4 text-white text-sm font-medium rounded-md transition ease-in-out duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isFormValid ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500' : 'bg-gray-400 cursor-not-allowed'
              }`}
              disabled={!isFormValid}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {isVisible && (
                <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
                    <Alert_error errorMsg="error" isVisible={isVisible} />
                </div>
            )}
    </div>
  );
  
  
}
