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

  return (
    <div className="home">
      <FeaturedInfo />

      <LineChart
        width={1000}
        height={300}
        data={userStats}
        sort={{
          type: "asc",
          byKey: "name",
        }}
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
}
