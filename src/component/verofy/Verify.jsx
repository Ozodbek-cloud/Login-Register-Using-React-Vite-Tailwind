import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Verify() {
  const [values, setValues] = useState(["", "", "", "", ""]);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const newValues = [...values];
    newValues[index] = e.target.value.slice(-1);
    setValues(newValues);

    if (e.target.value && index < values.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };
  if (values.length == 5) {
    console.log(values)
  }
  return (
    <div className="h-screen bg-gray-800 flex justify-center items-center flex-col gap-6">
       <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_8px_24px_rgba(236,72,153,0.25)]">
        Verifiation Code Sent To Your Email !
      </h1>
      <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_8px_24px_rgba(236,72,153,0.25)]">
        Authorization
      </h1>

      <div className="flex gap-3">
        {values.map((val, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            value={val}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            className="w-[70px] h-[100px] rounded-3xl text-5xl text-center 
                       bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-pink-400 
                       bg-clip-text text-transparent 
                       border-2 border-indigo-400 drop-shadow-[0_8px_24px_rgba(236,72,153,0.25)]"
            placeholder={["0", "0", "0", "0", "0"][index]}
          />
        ))}
      </div>
      <Link to="/sign_in">
        <button  className="p-3 border  px-15 rounded-4xl font-bold text-[#fff] transition-all duration-300 hover:scale-[1.1] bg-purple-500 hover:bg-[#fff] hover:text-pink-500">SIGN IN</button>
      </Link>
    </div>
  );
}
