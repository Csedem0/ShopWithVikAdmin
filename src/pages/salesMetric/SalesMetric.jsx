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
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Sales",
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

  const monthWithMostSales = (chart) => {
    const mostSalesData = [300, 280];
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
        <h1>Sales</h1>
      </nav>
      <p>Click below on the selected options to filter the sales metric;</p>
      <div className="option">
        <div className="sales">
          <select className="sale" id="saleFilter">
            <option value="">Select Sales</option>
            <option value="hrs">Last 24 Hours</option>
            <option value="days">Last Month</option>
            <option value="months">Last Year</option>
          </select>
        </div>
        <div className="months">
          <select className="month" id="monthFilter">
            <option value="">Select Month</option>
            <option value="mostSales">Month with Most Sales</option>
            <option value="leastSales">Month with Least Sales</option>
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
