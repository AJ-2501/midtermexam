import React, { useState } from "react";
import "./App.css";

// Display Component Function
function Display({ value }) {
  return (
    <input
      className="display"
      type="text"
      value={value}
      disabled
    />
  );
}

// Button Component Function
function Button({ label, className = "", onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default function App() {
  // B. Initial state when the app starts
  const [displayValue, setDisplayValue] = useState("10 Things That Require Zero Talent");

  // Key mappings for corresponding text outputs
  const mappings = {
    "1": "Being On Time",
    "2": "Making An Effort",
    "3": "Being High Energy",
    "4": "Having A Positive Attitude",
    "5": "Being Passionate",
    "6": "Using Good Body Language",
    "7": "Being Coachable",
    "8": "Doing A Little Extra",
    "9": "Being Prepared",
    "0": "Having A Strong Work Ethic",
    "NAME": "ALEXANDER JUDE D. CRUZ",
    "SUBJ": "C-PCIT9"
  };

  const handleButtonClick = (key) => {
    setDisplayValue(mappings[key]);
  };

  return (
    <div className="container">
      <div className="calculator">
        {/* A. Header updated with name and section */}
        <h1 className="header">ALEXANDER JUDE D. CRUZ - IT3A</h1>
        <Display value={displayValue} />
        
        {/* C. Click handlers attached to respective keys */}
        <div className="buttons">
          <Button label="7" onClick={() => handleButtonClick("7")} />
          <Button label="8" onClick={() => handleButtonClick("8")} />
          <Button label="9" onClick={() => handleButtonClick("9")} />

          <Button label="4" onClick={() => handleButtonClick("4")} />
          <Button label="5" onClick={() => handleButtonClick("5")} />
          <Button label="6" onClick={() => handleButtonClick("6")} />

          <Button label="1" onClick={() => handleButtonClick("1")} />
          <Button label="2" onClick={() => handleButtonClick("2")} />
          <Button label="3" onClick={() => handleButtonClick("3")} />

          <Button label="NAME" onClick={() => handleButtonClick("NAME")} />
          <Button label="0" onClick={() => handleButtonClick("0")} />
          <Button label="SUBJ" onClick={() => handleButtonClick("SUBJ")} />
        </div>
      </div>
    </div>
  );
}