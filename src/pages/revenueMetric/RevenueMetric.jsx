import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "./salesmetric.css";

const SalesMetric = () => {
  useEffect(() => {
    const salesData = [
      120, 150, 200, 180, 250, 220, 300, 280, 320, 400, 380, 420,
    ];
    const chart = createSalesChart(salesData);

    const saleFilter = document.getElementById("saleFilter");
    const monthFilter = document.getElementById("monthFilter");

    saleFilter.addEventListener("change", function () {
      filterByTime(this.value, chart);
    });

    monthFilter.addEventListener("change", function () {
      switch (this.value) {
        case "mostSales":
          monthWithMostSales(chart);
          break;
        case "leastSales":
          monthWithLeastSales(chart);
          break;
        case "january":
          january(chart);
          break;
        case "febuary":
          ferbuary(chart);
          break;
        case "march":
          march(chart);
          break;
        case "april":
          april(chart);
          break;
        case "may":
          may(chart);
          break;
        case "june":
          june(chart);
          break;
        case "july":
          july(chart);
          break;
        case "august":
          august(chart);
          break;
        case "september":
          september(chart);
          break;
        case "october":
          october(chart);
          break;
        case "november":
          november(chart);
          break;
        case "december":
          december(chart);
          break;
        default:
          // Handle default case or do nothing
          break;
      }
    });
  }, []);

  const createSalesChart = (data) => {
    const canvas = document.getElementById("salesChart");
    const ctx = canvas.getContext("2d");

    const salesChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Revenue",
            data: data,
            borderColor: "rgba(0, 0, 0, 1)",
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        // Add any chart options you need
      },
    });
    return salesChart;
  };

  const filterByTime = (time, chart) => {
    let filteredData = [];

    switch (time) {
      case "hrs":
        filteredData = generateRandomData(12, 100, 200);
        break;
      case "days":
        filteredData = generateRandomData(12, 1000, 4000);
        break;
      case "months":
        filteredData = generateRandomData(12, 5000, 10000);
        break;
      default:
        filteredData = generateRandomData(120, 1000, 5000);
        break;
    }
    updateSalesChart(chart, filteredData);
  };

  const january = (chart) => {
    const january = [350, 280];
    updateSalesChart(chart, january);
  };

  const ferbuary = (chart) => {
    const ferbuary = [120, 150, 200, 180, 250, 220, 300, 280];
    updateSalesChart(chart, ferbuary);
  };
  const march = (chart) => {
    const march = [900, 50];
    updateSalesChart(chart, march);
  };
  const april = (chart) => {
    const april = [700, 180];
    updateSalesChart(chart, april);
  };
  const may = (chart) => {
    const may = [300, 280];
    updateSalesChart(chart, may);
  };
  const june = (chart) => {
    const june = [80, 90];
    updateSalesChart(chart, june);
  };
  const july = (chart) => {
    const july = [500, 900];
    updateSalesChart(chart, july);
  };
  const august = (chart) => {
    const august = [310, 230];
    updateSalesChart(chart, august);
  };
  const september = (chart) => {
    const september = [300, 280];
    updateSalesChart(chart, september);
  };
  const october = (chart) => {
    const october = [70, 970];
    updateSalesChart(chart, october);
  };
  const november = (chart) => {
    const november = [303, 30];
    updateSalesChart(chart, november);
  };
  const december = (chart) => {
    const december = [870, 280];
    updateSalesChart(chart, december);
  };

  const monthWithMostSales = (chart) => {
    const mostSalesData = [300, 30];
    updateSalesChart(chart, mostSalesData);
  };

  const monthWithLeastSales = (chart) => {
    const leastSalesData = [120, 150, 200, 180, 250, 220, 300, 280];
    updateSalesChart(chart, leastSalesData);
  };

  const generateRandomData = (length, min, max) => {
    return Array.from({ length: length }, () =>
      Math.floor(Math.random() * (max - min + 1) + min)
    );
  };

  const updateSalesChart = (chart, data) => {
    chart.data.datasets[0].data = data;
    chart.update();
  };

  return (
    <div className="soyy">
      <nav>
        <h1>Revenue</h1>
      </nav>
      <p>Click below on the selected options to filter the sales metric;</p>
      <div className="option">
        <div className="sales">
          <select className="sale" id="saleFilter">
            <option value="">Select Year</option>
            <option value="hrs">2023</option>
            <option value="days">2022</option>
            <option value="months">2021</option>
            <option value="hrs">2020</option>
            <option value="days">2019</option>
          </select>
        </div>
        <div className="months">
          <select className="month" id="monthFilter">
            <option value="">Select Month</option>
            <option value="january">January</option>
            <option value="febuery">Febuery</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>
      </div>

      <div>
        <canvas id="salesChart" width="150" height="50"></canvas>
      </div>
    </div>
  );
};

export default SalesMetric;
