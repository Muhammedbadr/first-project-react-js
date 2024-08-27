"use client"; // Add this line at the top

import { useState } from "react";

let firstNAME = "Muhammad"; // Initial value

export default function ChangingBtn({ btn = "Not yet" }) {
  // State hook to manage the name
  const [name, setName1  ] = useState(firstNAME);

  // Function to change the state value
  function buttonclicked() {
    if(name == "Ahmmad"){
      setName1("Muhammad");
    }else{
      setName1("Ahmmad");

    }
    
  }
 

  return (
    <div className="my-8 flex flex-col bg-gray-200 rounded-lg w-1/2 justify-center mx-auto">
      <p  className="  p-2  font-semibold text-black">{name}</p> {/* Display the current state */}
      <button
        onClick={buttonclicked}
        className="text-white  py-2 px-4  bg-gradient-to-r from-green-300 to-green-400 hover:from-green-500 hover:to-green-600 font-semibold rounded-lg shadow-md transform-8  transition-transform duration-300"
      >
        click here
      </button>
    </div>
  );
}
