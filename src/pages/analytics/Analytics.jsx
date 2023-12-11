import React from "react";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./analytics.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Navbar from "pages/Navbar";
import Chart from "../../components/chart/Chart";
import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { userRequest } from "requestMethods";
import Topbar from "components/topbar/Topbar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = () => {
  const [userStats, setUserStats] = useState([]);

  const data = {
    labels: ["User", "Goods", "Product"],
    datasets: [
      {
        data: [3, 6, 9],
        backgroundColor: ["green", "blue", "aqua"],
      },
    ],
  };

  const data2 = {
    labels: ["Goods", "Interactions", "Users"],
    datasets: [
      {
        data: [40, 24, 18],
        backgroundColor: ["green", "blue", "aquas"],
      },
    ],
  };

  const options = {};

  const MONTHS = useMemo(
    () => [
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
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        const sortedData = res.data.sort((a, b) => a._id - b._id);
        setUserStats(
          sortedData.map((item) => ({
            name: MONTHS[item._id - 1],
            "Active User": item.total,
          }))
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  console.log(userStats);

  const pieChartData = {
    labels: userStats.map((data) => data.name),
    datasets: [
      {
        data: userStats.map((data) => data["Active User"]),
        backgroundColor: ["green", "blue", "aqua", "lemon", "lightblue"],
      },
    ],
  };

  const barChartData = {
    labels: userStats.map((data) => data.name),
    datasets: [
      {
        label: "Active Users",
        data: userStats.map((data) => data["Active User"]),
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Adjust color as needed
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const donutChartData = {
    labels: userStats.map((data) => data.name),
    datasets: [
      {
        data: userStats.map((data) => data["Active User"]),
        backgroundColor: ["green", "blue", "aqua", "lemon", "lightblue"],
      },
    ],
  };

  return (
    <div className="analytics">
      <div
        className="chatimg"
        style={{
          padding: "20px",
          width: "35%",
          display: "flex",
          alignItems: "center",
          flex: 4,
          gap: "80%",
        }}
      >
        <div className="firstt">
          <div className="secondd">Leads </div>
          <Pie data={pieChartData} options={options} />
        </div>
        <div className="firstt">
          <div className="secondd">Sales</div>
          <Doughnut data={donutChartData} options={options} />
        </div>
      </div>
      <Bar data={barChartData} options={options} width={500} />
      <LineChart
        width={1000}
        height={300}
        data={userStats}
        title="User Analytics"
        grid
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" label={{ position: "insideBottomRight" }} />
        <YAxis
          label={{ value: "Active Users", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Active User" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Analytics;
