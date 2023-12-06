import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Navbar from "pages/Navbar";
import Chart from "../../components/chart/Chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { userRequest } from "requestMethods";
import Topbar from "components/topbar/Topbar";
import Sidebar from "components/sidebar/Sidebar";

export default function Home() {
  const [userStats, setUserStats] = useState([]);

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
    <div className="home">
      <FeaturedInfo />

      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <LineChart width={1000} height={300} data={userStats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="Active User"
          label={{ value: "Month", position: "insideBottomRight", offset: 0 }}
        />
        <YAxis
          label={{ value: "Active Users", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Active User" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
