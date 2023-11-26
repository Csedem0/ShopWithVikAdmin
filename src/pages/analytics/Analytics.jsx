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

const Analytics = () => {
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
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="chatimg">
        <img src="https://www.slidegeeks.com/pics/dgm/l/m/Monthly_Sales_Comparison_Percentage_Analysis_Ppt_PowerPoint_Presentation_File_Infographic_Template_PDF_Slide_1-.jpg" />
        <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-198388,resizemode-75,msid-83283628/industry/banking/finance/banking/bank-lending-could-remain-subdued-despite-low-rates/indicator-decline-getty.jpg" />
      </div>
    </div>
  );
};

export default Analytics;
