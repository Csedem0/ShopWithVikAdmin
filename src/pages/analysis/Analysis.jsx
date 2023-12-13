import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import "./analysis.css";

const Analysis = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("");
  const [resultMessage1, setResultMessage1] = useState("");
  const [resultPercent, setResultPercent] = useState("");

  const calculatePro = () => {
    if (!selectedTimeframe) {
      setResultMessage1("Please select a timeframe");
      setResultPercent("");
      return;
    }

    setResultMessage1("Calculating...");
    setResultPercent("");

    const timeframes = {
      oneMonth: { firstNum: 100, secondNum: 200, thirdNum: 150 },
      quarter: { firstNum: 15000, secondNum: 20000, thirdNum: 17000 },
      sixMonths: { firstNum: 45500, secondNum: 10000, thirdNum: 30000 },
      oneYear: { firstNum: 60000, secondNum: 56000, thirdNum: 40000 },
    };

    const { firstNum, secondNum, thirdNum } = timeframes[selectedTimeframe];

    setTimeout(() => {
      const sum = firstNum + secondNum + thirdNum;
      const average = Math.floor(sum / 3);
      const wrappedAverage = average % 101;

      setResultMessage1(`You will likely get a sale of`);
      setResultPercent(`${wrappedAverage}%`);

      const data = [firstNum, secondNum, thirdNum, average];

      const ctx = document.getElementById("myChart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Result"],
          datasets: [
            {
              label: "Values",
              data,
              backgroundColor: ["rgba(255, 99, 132, 1)"],
              borderColor: ["rgba(255, 99, 132, 1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          indexAxis: "y",
          plugins: {
            title: {
              display: true,
              text: "Sales",
              color: "black",
            },
          },
          scales: {
            x: {
              ticks: { color: "black" },
            },
            y: {
              beginAtZero: true,
              max: 500000,
            },
          },
        },
      });
    }, 1000); // Simulated loading delay (1 second)
  };

  return (
    <div id="content-box">
      <h1>Predictive Analysis</h1>
      <br />
      <p>Select a timeframe to see possible sales</p>
      <br />
      <div className="yearMonth">
        <select
          className="timeframe"
          name="timeframe"
          required
          value={selectedTimeframe}
          onChange={(e) => setSelectedTimeframe(e.target.value)}
        >
          <option value="">Select Timeframe</option>
          <option value="oneMonth">1 Month</option>
          <option value="quarter">Quarterly</option>
          <option value="sixMonths">6 Months</option>
          <option value="oneYear">1 Year</option>
        </select>
      </div>
      <br />
      <button id="calculate" onClick={calculatePro}>
        Calculate
      </button>
      <br />
      <br />
      <h2 id="resultMessage1">{resultMessage1}</h2>
      <p id="resultPercent">{resultPercent}</p>
      <h2 id="resultMessage4">
        {resultMessage1 ? "based on previous sales" : ""}
      </h2>
      <canvas id="myChart" width="100" height="12" />
    </div>
  );
};

export default Analysis;
