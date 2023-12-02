import React, { useState } from "react";
import "./analysis.css";

const Analysis = () => {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [thirdNum, setThirdNum] = useState("");
  const [resultMessage1, setResultMessage1] = useState("");
  const [resultPercent, setResultPercent] = useState("");
  const [resultMessage2, setResultMessage2] = useState("");
  const [resultMessage3, setResultMessage3] = useState("");

  const handleCalculate = () => {
    if (firstNum !== "" && secondNum !== "" && thirdNum !== "") {
      const num1 = parseFloat(firstNum);
      const num2 = parseFloat(secondNum);
      const num3 = parseFloat(thirdNum);

      if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        const sum = num1 + num2 + num3;
        const average = Math.floor((sum / 3) % 101); // Use modulus operator to ensure the result stays within 0-100

        setResultMessage1("You will likely get a sale of");
        setResultPercent(average + "%");
      } else {
        setResultMessage2("Please enter valid numbers");
        setResultPercent("");
      }
    } else {
      setResultMessage3("Please enter all numbers");
      setResultPercent("");
    }
  };

  return (
    <div className="Analysis">
      <h1 className="Analysist">Predictive Analysis</h1>
      <p>Enter your value to see possible sales for next Month</p>

      <div className="yearMonth">
        <select
          className="year"
          name="year"
          required="true"
          id=""
          aria-required="true"
        >
          <option value="">Select Year</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        <select
          className="month"
          name="month"
          required="true"
          id=""
          aria-required="true"
        >
          <option value="">Select Year</option>
          <option value="nMonth">Next Month</option>
        </select>
      </div>

      <div className="all">
        <div className="left">
          <label for="firstNum">Last Two Month Sales: </label>
        </div>
        <div className="right">
          <input
            type="text"
            id="firstNum"
            name="firstNum"
            className="right"
            required
            value={firstNum}
            onChange={(e) => setFirstNum(e.target.value)}
          />
        </div>
      </div>

      <div className="all">
        <div className="left">
          <label for="secondNum">Last Month Sales: </label>
        </div>
        <div className="right">
          <input
            type="text"
            id="secondNum"
            name="secondNum"
            className="right"
            required
            value={secondNum}
            onChange={(e) => setSecondNum(e.target.value)}
          />
        </div>
      </div>

      <div className="all">
        <div className="left">
          <label for="thirdNum">Current Month Sales: </label>
        </div>
        <div className="right">
          <input
            type="text"
            id="thirdNum"
            name="thirdNum"
            className="right"
            required
            value={thirdNum}
            onChange={(e) => setThirdNum(e.target.value)}
          />
        </div>
      </div>

      <button id="calculate" onClick={handleCalculate}>
        Calculate
      </button>

      <br />
      <br />

      <h2 id="resultMessage1">{resultMessage1}</h2>
      <p id="resultPercent">{resultPercent}</p>
      <h2 id="resultMessage2">{resultMessage2}</h2>
      <h2 id="resultMessage3">{resultMessage3}</h2>
    </div>
  );
};

export default Analysis;
