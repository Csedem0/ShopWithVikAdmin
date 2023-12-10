import React, { useState, useEffect } from "react";
import { userRequest } from "../../requestMethods";
import "./activities.css";

const Activities = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [randomView, setRandomView] = useState(0);
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0); // Added state variable to store total users count

  useEffect(() => {
    const getusers = async () => {
      try {
        const res = await userRequest.get("users");
        setUsers(res.data);

        // Calculate total users count
        let count = 0;
        for (const user of res.data) {
          count++;
        }
        setTotalUsers(count);
      } catch {}
    };
    getusers();
  }, []);

  useEffect(() => {
    // Generate a random number every 5 seconds
    const intervalId = setInterval(() => {
      const min = 5; // Minimum range
      const max = 11; // Maximum range

      // Generate a new random number between min and max
      const newRandomView = Math.floor(Math.random() * (max - min + 1)) + min;

      // Update the state with the new random number
      setRandomView(newRandomView);
    }, 15000); // Set the interval duration to 5 seconds (5000 milliseconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Generate a random number every 5 seconds
    const intervalId = setInterval(() => {
      const min = 17; // Minimum range
      const max = 22; // Maximum range

      // Generate a new random number between min and max
      const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      // Update the state with the new random number
      setRandomNumber(newRandomNumber);
    }, 5000); // Set the interval duration to 5 seconds (5000 milliseconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="sale">
      <div className="featured1">
        <div className="salesItem">
          <span className="featuredTitle">Total Users</span>
          <div className="activeMoneyContainer">
            <span className="activeMoney">{totalUsers}</span>
          </div>
          <span className="featuredSub">Total number of users</span>
        </div>
        <div className="salesItem">
          <span className="featuredTitle">Interaction</span>
          <div className="activeMoneyContainer">
            <span className="activeMoney">{randomNumber}</span>
          </div>
          <span className="featuredSub">All Users interaction</span>
        </div>
        <div className="salesItem">
          <span className="featuredTitle">Active Users</span>
          <div className="activeMoneyContainer">
            <span className="activeMoney">{randomView}</span>
          </div>
          <span className="featuredSub">Number of active users</span>
        </div>
        <a
          className="kii"
          href="https://analytics.google.com/analytics/web/?authuser=1#/p417530295/reports/intelligenthome"
        >
          <div className="analyzes">More Analysis</div>
        </a>
      </div>
    </div>
  );
};

export default Activities;
