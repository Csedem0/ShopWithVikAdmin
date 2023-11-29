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

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = () => {
  const [userStats, setUserStats] = useState([]);

  const data = {
    labels: ["user", "goods", "product"],
    datasets: [
      {
        data: [3, 6, 9],
        backgroundColor: ["green", "blue", "aqua"],
      },
    ],
  };

  const data2 = {
    labels: ["User", "Goods", "Product"],
    datasets: [
      {
        data: [9, 4, 2],
        backgroundColor: ["green", "blue", "lemon"],
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
      "Agu",
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
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  console.log(userStats);

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
        <Pie data={data} options={options}></Pie>
        <Pie data={data2} options={options}></Pie>
      </div>
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
    </div>
  );
};

export default Analytics;
