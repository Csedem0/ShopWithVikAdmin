import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import "./analysis.css";

const Analysis = () => {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [thirdNum, setThirdNum] = useState("");
  const [myChart, setMyChart] = useState(null);

  useEffect(() => {
    const button = document.getElementById("calculate");
    button.addEventListener("click", calculatePro);
    return () => {
      button.removeEventListener("click", calculatePro);
    };
  }, []);

  const calculatePro = () => {
    document.getElementById("resultMessage1").innerText = "Calculating.....";
    document.getElementById("resultPercent").innerText = "";

    if (firstNum !== "" && secondNum !== "" && thirdNum !== "") {
      setTimeout(() => {
        const num1 = parseFloat(firstNum);
        const num2 = parseFloat(secondNum);
        const num3 = parseFloat(thirdNum);

        if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
          const sum = num1 + num2 + num3;
          const average = Math.floor(sum / 3);
          document.getElementById("resultMessage1").innerText =
            "You will likely get a sale of";
          const wrappedAverage = average % 101;
          document.getElementById("resultPercent").innerText =
            wrappedAverage + "%";
          updateChart([num1, num2, num3, average]);
          document.getElementById("resultMessage4").innerText =
            "based on previous Sale";
        } else {
          document.getElementById("resultMessage2").innerText =
            "Please enter valid numbers";
          document.getElementById("resultPercent").innerText = "";
        }
      }, 1000);
    } else {
      document.getElementById("resultMessage3").innerText =
        "Please enter all numbers";
      document.getElementById("resultPercent").innerText = "";
    }
  };

  const updateChart = (data) => {
    if (myChart) {
      myChart.data.datasets[0].data = data;
      myChart.update();
    } else {
      const ctx = document.getElementById("myChart").getContext("2d");
      const newChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Two Month Sales",
            "One Month Sales",
            "Current Month Sales",
            "Next Month Sales",
          ],
          datasets: [
            {
              label: "Values",
              data: data,
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
              ],
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
              ticks: {
                color: "black",
              },
            },
            y: {
              beginAtZero: true,
              max: 500000,
            },
          },
        },
      });
      setMyChart(newChart);
    }
  };

  return (
    <div id="content-box">
      <h1>Predictive Analysis</h1>
      <br />
      <p>Enter your value to see possible sales for next Month</p>
      <br />
      <div className="yearMonth">
        <select
          className="year"
          name="year"
          required={true}
          id=""
          aria-required={true}
        >
          <option value="">Select Year</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
        <select
          className="month"
          name="month"
          required={true}
          id=""
          aria-required={true}
        >
          <option value="">Select Month</option>
          <option value="nMonth">Next Month</option>
        </select>
      </div>
      <br />
      <br />
      <div className="all">
        <div className="left">
          <label htmlFor="firstNum">Last Two Month Sales: </label>
        </div>
        <div className="right">
          <input
            type="text"
            id="firstNum"
            name="firstNum"
            className="right"
            required
            onChange={(e) => setFirstNum(e.target.value)}
          />
          <br />
          <br />
        </div>
      </div>
      <div className="all">
        <div className="left">
          <label htmlFor="secondNum">Last Month Sales: </label>
        </div>
        <div className="right">
          <input
            type="text"
            id="secondNum"
            name="secondNum"
            className="right"
            required
            onChange={(e) => setSecondNum(e.target.value)}
          />
          <br />
          <br />
        </div>
      </div>
      <div className="all">
        <div className="left">
          <label htmlFor="thirdNum">Current Month Sales: </label>
        </div>
        <div className="right">
          <input
            type="text"
            id="thirdNum"
            name="thirdNum"
            className="right"
            required
            onChange={(e) => setThirdNum(e.target.value)}
          />
          <br />
          <br />
        </div>
      </div>

      <button id="calculate" onClick={calculatePro}>
        Calculate
      </button>
      <br />
      <br />
      <br />
      <br />
      <h2 id="resultMessage1"></h2>
      <p id="resultPercent"></p>
      <h2 id="resultMessage2"></h2>
      <h2 id="resultMessage3"></h2>
      <h2 id="resultMessage4"></h2>
      <canvas id="myChart" width="150" height="50"></canvas>
    </div>
  );
};

export default Analysis;
